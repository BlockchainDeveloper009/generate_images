const Jimp = require("jimp");

(async function() {
    const image = await Jimp.read("images/shapes.png");

    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    //Resize the image to 250 x 250
    image.resize(250,250);
    //Resize the height to 250 and scale the wideth accordingly

    image.resize(Jimp.AUTO, 250);
    // Resize the width to 250 and scale the height accordingly
    image.resize(250, Jimp.AUTO);

    image.print(font, 0,0, "HelloWorld");

    //Pixelation
    image.pixelate(5);

    image.pixelate(5, 50, 50, 190, 200); // pixe, x, y, w, h



    //save the image
    image.write("images/edited-shapes.png");

})();