const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'uploads'))
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(6, (err, hash) => {
                if(err) callback(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`

                callback(null, fileName);
            });
        }
    }),
    limits: {
        fileSize: 2* 1024 * 1024 , files: 4
    },
    fileFilter: (req, file, callback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ];

        if(allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error('Arquivo inválido!'))
        }
    }
}