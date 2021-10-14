import fs from 'fs';
import path from 'path';

const fileExist = async function(folder: string, filename: string) : Promise<boolean> {
    const imgFolder: string = path.resolve(folder);
    const imgPath = path.join(imgFolder, `${filename}.jpg`);
    if(fs.existsSync(imgPath)) {
        return true;
    } else {
        return false;
    }
}

const filePath = function(folder: string, filename: string) {
    const imgFolder: string = path.resolve(folder);
    const imgPath = path.join(imgFolder, `${filename}.jpg`);
    console.log(imgPath);
    return imgPath;
}

export {fileExist, filePath};