const Model = require("../models/index");

class CategoryController {

    find = async (req, res) => {
        return await Model.Categories.findAll()
        .then( categoryResponse => {
            res.status(200).json({
                message: 'Success',
                data: categoryResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    findOne = async (req, res) => {
        return await Model.Categories.findAll({
            where: {id: req.params.id },
        })
        .then( categoryResponse => {
            res.status(200).json({
                message: 'Success',
                data: categoryResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    create = async (req, res) => {
        return await Model.Categories.create({
            name: req.body.name,
            description: req.body.description,
            createdBy: 1,
            updatedBy:1,
        })
        .then( categoryResponse => {
            res.status(200).json({
                message: 'Success',
                data: categoryResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    update = async (req, res) => {
        return await Model.Categories.update(req.body, {
            where: {id: req.params.id }
        })
        .then( categoryResponse => {
            res.status(200).json({
                message: 'Success',
                data: categoryResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    destroy = async (req, res) => {
        return await Model.Categories.destroy({
            where: {id: req.params.id }
        })
        .then( categoryResponse => {
            res.status(200).json({
                message: 'Success',
                data: categoryResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }
}
module.exports = new CategoryController;