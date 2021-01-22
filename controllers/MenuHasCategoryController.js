const Model = require("../models/index");

class MenuHasCategoryController {

    find = async (req, res) => {
        return await Model.MenuHasCategory.findAll()
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

    checkMenuHasCategory = async (req, res) => {
        return await Model.MenuHasCategory.count({
            where: {menu_id: req.params.id },
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

    findOne = async (req, res) => {
        return await Model.MenuHasCategory.findAll({
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
        return await Model.MenuHasCategory.create({
            menu_id: req.body.menu_id,
            category_id: req.body.category_id,
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
        return await Model.MenuHasCategory.update(req.body, {
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
        return await Model.MenuHasCategory.destroy({
            where: {id: req.params.id },
            truncate: true
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
module.exports = new MenuHasCategoryController;