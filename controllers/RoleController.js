const Model = require("../models/index");

class RoleController {

    find = async (req, res) => {
        return await Model.Roles.findAll()
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

    findOne = async (req, res) => {
        return await Model.Roles.findAll({
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
        return await Model.Roles.create({
            name: req.body.name,
            description: req.body.description,
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
        return await Model.Roles.update(req.body, {
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

    destroy = async (req, res) => {
        return await Model.Roles.destroy({
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
}
module.exports = new RoleController;