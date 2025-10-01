// multer import kiya file uploads handle karne ke liye
const multer = require('multer');
// crypto import kiya unique random file name generate karne ke liye
const crypto = require('crypto');
// path module import kiya file extension (.jpg, .png) nikalne ke liye
const path = require('path');


// Disk storage ka config banaya
// Ye batata hai file kaha save hogi aur kis naam se save hogi
const storage = multer.diskStorage({
  
  // destination batata hai file kaha store karni hai
  destination: function (req, file, cb) {
    // null matlab koi error nahi, '/tmp/my-uploads' matlab location jaha file save hogi
    cb(null, './public/images/uploads')
  },

  // filename decide karta hai file ka naam
  filename: function (req, file, cb) {
    // random 16 bytes generate kar rahe hain
    crypto.randomBytes(16, (err, name) => {
      if (err) return cb(err);

      // random name ko hex string me convert kiya
      // aur file ka extension (like .jpg, .png) original file se liya
      const fn = name.toString('hex') + path.extname(file.originalname);

      // null matlab koi error nahi, fn matlab final filename
      cb(null, fn)
    })
  }
})

// ab storage config ko multer me pass kiya
// isse ek middleware banta hai jo request ke files handle karega
const upload = multer({ storage: storage })

module.exports = upload;
