const Model = require("../models/index");

var bcrypt = require('bcrypt');

class UserController {

    find = async (req, res) => {
        // return await Model.sequelize.query('SELECT * FROM users')
        return await Model.User.findAll()

        .then( userResponse => {
            res.status(200).json({
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    findOne = async (req, res) => {
        return await Model.User.findAll({
            where: {id: req.params.id },
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    create = async (req, res) => {
        let hashPassword = bcrypt.hashSync(req.body.password, 10);
        return await Model.User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
            role_id: req.body.role,
            createdBy: 1,
            updatedBy:1,
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    update = async (req, res) => {
        let userObject = [];
        if(req.body.password == '' || req.body.password == undefined ){
            userObject = {
                username: req.body.username,
                email: req.body.email,
                role_id: req.body.role_id,
                description: req.body.description
            }
        }else{
            let hashPassword = bcrypt.hashSync(req.body.password, 10);
            userObject = {
                username: req.body.username,
                email: req.body.email,
                password: hashPassword,
                role_id: req.body.role_id,
                description: req.body.description
            }
        }

        return await Model.User.update(userObject, {
            where: {id: req.params.id }
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    userCount = async (req, res) => {
        return await Model.User.findAndCountAll()
        .then( respone => {
            res.status(200).json({
                data: respone.count,
                message: 'success'
            })
        })
        .catch( error => console.log(error))
    }

    destroy = async (req, res) => {
        return await Model.User.destroy({
            where: {id: req.params.id }
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    login = async (req, res) => {

        const passwordEnteredByUser = req.body.password;
        let passwordHasSring = null;
        let userId = null;
        
        Model.User.findAll({
            where: {
                email: req.body.email
            },
            attributes: ['password', 'id']
        })
        .then( userResponse => {
            userResponse.forEach(element => {
                passwordHasSring = element.dataValues.password;
                userId = element.dataValues.id;
            });
            
            bcrypt.compare(passwordEnteredByUser, passwordHasSring, function(err, isMatch) {
                if (!isMatch) {
                    console.log("Password doesn't match!")
                    return res.status(200).json({
                        message: 0
                    });
                } else {
                    console.log("Password matches!")
                    return res.status(200).json({
                            message: 1,
                            data: userId
                        });
                    }
              })
            
        })
    }
}
module.exports = new UserController;