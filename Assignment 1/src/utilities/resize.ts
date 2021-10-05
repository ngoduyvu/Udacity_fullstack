import sharp from 'sharp';

let resize = async function(filename: string, width: number, height: number) {
    console.log(filename + ".jpg")
    await sharp("./full/" + filename + ".jpg").resize(width, height).toFile("./thumb/" + filename + "_thumb" + ".jpg");
}

export default resize;