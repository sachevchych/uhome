const path = require('path');
const fs = require('fs')
const sharp = require('sharp')

module.exports.uploadImage = (req, res) => {
  if (req.file) {
    const directoryPath = './static/img/products/'
    const imageExtension = path.extname(req.file.filename)
    const imageName = path.basename(req.file.filename, imageExtension);

    sharp(directoryPath + req.file.filename)
      .flatten({background: {r: 255, g: 255, b: 255,  alpha: 255}})
      .jpeg({
        quality: 80,
        force: true
      })
      .resize(900)
      .toFile(directoryPath + 'image-' + imageName + '.jpeg')
      .then(function (info) {
        res.status(201).json({
          name: 'image-' + imageName + '.jpeg',
          size: info.size,
        })
      })
      .catch(function (err) {
        console.log('sharpErr:' + err)
        res.status(201).json({
          message: `Виникла помилка: ${err}`,
          type: 'error'
        })
      })
      .finally(() => {
        fs.unlinkSync(directoryPath + req.file.filename)
      })
  } else {
    res.status(500).json('File not found')
  }
}

module.exports.removeImage = (req, res) => {
  try {
    fs.unlinkSync('./static/img/products/' + req.params.fileName)
    res.status(201).json({message: 'Файл видалено', type: 'success'})
  } catch (e) {
    res.status(201).json({message: `Файл не знайдено або не вдалося видалити. Помилка: ${e}`, type: 'warning'})
  }
}
