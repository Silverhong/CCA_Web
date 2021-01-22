const path = require('path');
var fs = require('fs');

class ServiceController {

  upload = async (req, res) => {
    try {

      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }

      res.send(req.file);

    } catch (err) {
      res.status(500).send({
        message: `Could not upload the file: ${req.file.fieldNameSize}. ${err}`,
      });
    }
  }

  sendFile = async (req, res) => {
    const filepath = `../public/uploads/${req.params.file}`;
    res.sendFile(path.resolve(__dirname, filepath));
  }

  destroyFile = async (req, res) => {
    try{
      if(!req.params.file){
        res.status(404).send({
          message: 'File not found'
        })
      }else{
        var targetPathUrl = __dirname + '/../public/uploads/' + req.params.file;
        fs.unlinkSync(`${targetPathUrl}`);
        res.status(200).json({
          message: 1
        })
      }
    }catch(err){
      res.status(400).send({
        message: 'No file'
      })
    }
  }

}

module.exports = new ServiceController;