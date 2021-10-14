import sharp from 'sharp';

const resize = async function(filename: string, width: number, height: number) {
  await sharp('./full/' + filename + '.jpg')
      .resize(width, height)
      .toFile('./thumb/' + filename + '_' + height + '_'+ width + '.jpg');
};

export default resize;
