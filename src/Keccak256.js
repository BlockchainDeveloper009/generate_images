// Rotate left function
function rotl(x, n) {
    return (x << n) | (x >>> (32 - n));
  }
  
  // Keccak-256 hash function
  function keccak256(message) {
    const blockByteSize = 136;
    const capacity = 32;
    const rate = blockByteSize - capacity;
  
    // Padding the message
    let padding = new Uint8Array(rate);
    padding[0] = 1 << 6;
    padding[rate - 1] |= 1;
  
    const blocks = Math.ceil((message.length + padding.length) / rate);
    const paddedMessage = new Uint8Array(blocks * rate);
    paddedMessage.set(message);
    paddedMessage.set(padding, message.length);
  
    // Keccak-256 state
    const state = new Uint32Array(blockByteSize / 4);
  
    for (let i = 0; i < blocks; i++) {
      const block = paddedMessage.slice(i * rate, (i + 1) * rate);
  
      for (let j = 0; j < block.length / 4; j++) {
        state[j] ^= block[j * 4 + 3] | (block[j * 4 + 2] << 8) | (block[j * 4 + 1] << 16) | (block[j * 4] << 24);
      }
  
      for (let round = 0; round < 24; round++) {
        // Theta
        const C = new Uint32Array(5);
        const D = new Uint32Array(5);
  
        for (let i = 0; i < 5; i++) {
          C[i] = state[i] ^ state[i + 5] ^ state[i + 10] ^ state[i + 15] ^ state[i + 20];
        }
  
        for (let i = 0; i < 5; i++) {
          D[i] = C[(i + 4) % 5] ^ rotl(C[(i + 1) % 5], 1);
        }
  
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 25; j += 5) {
            state[j + i] ^= D[i];
          }
        }
  
        // Rho and Pi
        let [x, y] = [1, 0];
        let current = state[y * 5 + x];
        for (let t = 0; t < 24; t++) {
          const [nextX, nextY] = [y, (2 * x + 3 * y) % 5];
          const next = state[nextY * 5 + nextX];
          state[nextY * 5 + nextX] = rotl(current, ((t + 1) * (t + 2)) / 2);
          [x, y, current] = [nextX, nextY, next];
        }
  
        // Chi
        for (let j = 0; j < 25; j += 5) {
          const temp = new Uint32Array(5);
          for (let i = 0; i < 5; i++) {
            temp[i] = state[j + i];
          }
          for (let i = 0; i < 5; i++) {
            state[j + i] ^= (~temp[(i + 1) % 5]) & temp[(i + 2
  