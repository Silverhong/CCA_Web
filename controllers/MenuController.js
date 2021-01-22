const Model = require("../models/index");

class MenuController {

    find = async (req, res) => {
        return await Model.Menus.findAll()
        .then( companyResponse => {
            res.status(200).json({
                message: 'Success',
                data: companyResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    findOne = async (req, res) => {
        return await Model.Menus.findAll({
            where: {id: req.params.id },
        })
        .then( companyResponse => {
            res.status(200).json({
                message: 'Success',
                data: companyResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    create = async (req, res) => {
        return await Model.Companies.create({
            name: req.body.name,
            description: req.body.description,
            createdBy: 1,
            updatedBy:1,
        })
        .then( companyResponse => {
            res.status(200).json({
                message: 'Success',
                data: companyResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    update = async (req, res) => {
        return await Model.Menus.update(req.body, {
            where: {id: req.params.id }
        })
        .then( companyResponse => {
            res.status(200).json({
                message: 'Success',
                data: companyResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    destroy = async (req, res) => {
        return await Model.Companies.destroy({
            where: {id: req.params.id }
        })
        .then( companyResponse => {
            res.status(200).json({
                message: 'Success',
                data: companyResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }
}
module.exports = new MenuController;