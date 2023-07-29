const axios = require('axios');

class OMDBClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'http://www.omdbapi.com/';
  }

  async searchMovieByYear(query) {
    const params = {
      apikey: this.apiKey,
      y: query,
    };
    try {
        const response = await axios.get(this.baseURL, { params });
        const { data } = response;
        if (response.status === 200 && data.Response === 'True') {
          return data.Search;
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error occurred during movie search:', error);
        return null;
      }
    }

  async searchMovie(query) {
    const params = {
      apikey: this.apiKey,
      s: query,
    };
 
 

    try {
      const response = await axios.get(this.baseURL, { params });
      const { data } = response;
      if (response.status === 200 && data.Response === 'True') {
        return data.Search;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error occurred during movie search:', error);
      return null;
    }
  }

  async getMovieDetails(imdbID) {
    const params = {
      apikey: this.apiKey,
      i: imdbID,
    };

    try {
      const response = await axios.get(this.baseURL, { params });
      const { data } = response;
      if (response.status === 200 && data.Response === 'True') {
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error occurred while fetching movie details:', error);
      return null;
    }
  }
}

// Usage example
const client = new OMDBClient('9b317bf7');
(async () => {
  //const movies = await client.searchMovie('Harry Potter');
  //searchMovieByYear
  const movies = await client.searchMovieByYear(2023);
  if (movies) {
    for (const movie of movies) {
      const movieDetails = await client.getMovieDetails(movie.imdbID);
      if (movieDetails) {
        console.log(`Title: ${movieDetails.Title}`);about:blank#blocked
        console.log(`Year: ${movieDetails.Year}`);
        console.log(`IMDb Rating: ${movieDetails.imdbRating}`);
        console.log('---');
      }
    }
  }
})();

//10-6ME24955
//6MC54610

//caulking with cement
//
//3M Bondo Home Solutions Wood Filler
// DAP Plastic Wood All-Purpose Wood Filler Exterior Wood Filler

//owned
//Minwax waterbsaed wood stain helmsman  soar urethane. - clear stain

// minwax wood interior satin
//2023
//3m bondo wod filler  dap 3 in 1

/*resources
[epoxy and polyester-based wood fillers]()https://www.woodweb.com/knowledge_base/Polyester_Versus_Epoxy_Wood_Fillers.html#:~:text=Bondo%20is%20an%20epoxy%20with,expensive%20and%20performs%20quite%20well.
//check on famowood filler for less expensive
*/

/*
1. Here are some interview questions that could be asked to evaluate the knowledge and skills of a smart contract developer:

1. What is a smart contract and how does it differ from a traditional contract?
Answer: A smart contract is a self-executing contract with the terms of the agreement directly written into code. It is stored on a blockchain and automatically 
executes when predetermined conditions are met. Unlike traditional contracts, smart contracts eliminate the need for intermediaries and provide transparency, 
security, and automated enforcement.



2. Which programming languages are commonly used for developing smart contracts on the Ethereum platform?
Answer: The most common programming language for Ethereum smart contract development is Solidity. 
It is specifically designed for writing smart contracts and is the primary language used on the Ethereum platform. 
Other languages like Vyper and Serpent are also used, but to a lesser extent. 



3. Explain the concept of gas in Ethereum. Why is it important, and how does it relate to the execution of smart contracts?
Answer: Gas is the unit used to measure computational effort and transaction costs on the Ethereum network. 
Every operation in a smart contract consumes a specific amount of gas, and users must pay for the gas consumed. 
Gas is important for preventing infinite loops, encouraging efficient code, and prioritizing transactions based on their gas price.

4. What are the potential security vulnerabilities in smart contracts, and how can they be mitigated?
Answer: Smart contracts are prone to various security vulnerabilities such as reentrancy attacks, integer overflow/underflow, and unhandled exceptions. 
These can be mitigated through best practices like using secure coding techniques, conducting extensive testing and auditing, implementing proper input validation
 and sanitization, and following the principle of least privilege.

5. Describe the process of deploying a smart contract on the Ethereum blockchain.
Answer: To deploy a smart contract on the Ethereum blockchain, 
the developer compiles the contract code into bytecode and creates a transaction to deploy it. 
The transaction is sent to the Ethereum network, where miners validate and include it in a block. Once mined, the contract becomes 
a part of the blockchain and gets assigned a unique address.

6. What is the purpose of the Solidity programming language? Explain some of its key features.
Answer: Solidity is a high-level language used for writing smart contracts on the Ethereum platform. 
Its key features include static typing, inheritance, libraries, events, modifiers, and support for complex data structures. 
Solidity allows developers to define the behavior of smart contracts and interact with the Ethereum blockchain.

7. How does event-driven programming work in the context of smart contracts?
Answer: Event-driven programming in smart contracts allows for efficient communication and interaction with the contract. 
Contracts can define events that are emitted during specific contract state changes. 
External entities can then listen to these events and react accordingly, enabling decentralized applications to respond to contract events.

8. Explain the concept of "immutable" in relation to smart contracts. Why is immutability important, 
and how does it affect the upgradability of smart contracts?
Answer: Immutability means that once a smart contract is deployed, its code and state cannot be changed.
 Immutability is crucial for ensuring trust and predictability in smart contracts. However, it also poses challenges for
 upgradability since modifications to existing contracts require deploying new contracts and migrating data or implementing proxy contracts with upgradeability mechanisms.


9. What is the role of the EVM (Ethereum Virtual Machine) in executing smart contracts? How does it handle gas, memory, and storage?
Answer: The EVM is the runtime environment for executing smart contracts on the Ethereum blockchain. It handles gas consumption, enforces gas costs for operations, manages memory and storage, and executes the bytecode of smart

Describe the different types of accounts in Ethereum and their roles in executing smart contracts.

What are the differences between private, public, and consortium blockchains? When would you choose one over the others for deploying smart contracts?

How do you handle errors and exceptions in smart contracts? What are some best practices for error handling?

Explain the concept of "gas optimization" in smart contract development. What strategies can you employ to reduce gas costs?

Have you used any smart contract development frameworks or tools? If so, describe your experience with them.

Describe a situation where you had to solve a complex problem or overcome a challenge while developing a smart contract. How did you approach it, and what was the outcome?

These questions cover various aspects of smart contract development, including programming languages, security, deployment, Ethereum-specific concepts, and best practices. 
They can help assess a candidate's understanding of the underlying technology, their problem-solving skills, and their ability to write efficient and secure smart contracts.

*/

/*
[nft-SECURITY audit ]( https://blog.quillaudits.com/2023/05/18/tldr-nft-security-audits-risks-and-safety-measures/)
[video-live-auditing](https://youtu.be/ZAiSou0CJmE)
[make-smartcontract-bugfree-create-testnetwork-buildbear-](https://medium.com/buildbear/use-buildbear-and-get-your-smart-contracts-de-bugged-5a9de3e2cf2c)
[journey-of-smart-contracts-from-solidity-code-to-bytecodes/](https://www.zaryabs.com/journey-of-smart-contracts-from-solidity-code-to-bytecodes/)
[Blockchain security course](https://www.youtube.com/watch?v=k8dy0HvbTic&list=PLgAorDu9_-dPGPkVWFceDNjlHyvvrx8Y0)
[Buidig secure-contracts](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/introduction/installation.md)
[ethereum-book-Ethereum-virtual-machine-book](https://github.com/ethereumbook/ethereumbook/blob/develop/13evm.asciidoc)
[QuillAudit_Auditor_Roadmap](https://github.com/Quillhash/QuillAudit_Auditor_Roadmap)

*/