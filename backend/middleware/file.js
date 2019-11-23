const multer = require('multer')

const DIR = './public/'

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, DIR)
    },
    filename: (req, file, cb)=>{
        const filename = Date.now() +  '-' + file.originalname.toLowerCase().split(' ').join('-')
        cb(null, filename)
    }
})