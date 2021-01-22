const Model = require("../models/index");

class CompanyController {

    find = async (req, res) => {
        return await Model.Companies.findAll()
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
        return await Model.Companies.findAll({
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
        // return await Model.Companies.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     phone: req.body.phone,
        //     logo:  req.body.file,
        //     address: req.body.address,
        //     description: req.body.description,
        //     createdBy: 1,
        //     updatedBy:1,
        // })
        // .then( companyResponse => {
        //     res.status(200).json({
        //         message: 'Success',
        //         data: companyResponse
        //     });
        // })
        // .catch( error => {
        //     res.status(400).send(error);
        // })
        return res.send(req.body.file)
    }

    update = async (req, res) => {
        return await Model.Companies.update(req.body, {
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
module.exports = new CompanyController;