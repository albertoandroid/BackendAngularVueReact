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

const upload = multer({
    storage: storage,
    fileFilter:(req, file, cb)=>{
        if(file.mimetype = "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            cb(null, true)
        }else{
            cb(null, false)
            return cb(new Error('Solo acepta .png, .jpg, y jpeg'))
        }
    }
})

module.exports = upload