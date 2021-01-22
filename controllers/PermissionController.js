const Model = require("../models/index");

class PermissionController {

    find = async (req, res) => {
        return await Model.Permissions.findAll()
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
        return await Model.Tags.findAll({
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
        return await Model.Tags.create({
            name: req.body.name,
            description: req.body.description,
            createdBy: 1,
            updatedBy:1,
        })
        .then( tagResponse => {
            res.status(200).json({
                message: 'Success',
                data: tagResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    update = async (req, res) => {
        return await Model.Tags.update(req.body, {
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
        return await Model.Tags.destroy({
            where: {id: req.params.id }
        })
        .then( tagResponse => {
            res.status(200).json({
                message: 'Success',
                data: tagResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }
}
module.exports = new PermissionController;