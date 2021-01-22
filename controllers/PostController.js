const Model = require("../models/index");

class PostController {

    find = async (req, res) => {
        return await Model.Posts.findAll({
            order: [
                ['id', 'DESC']
            ]
        })

        .then( postResponse => {
            res.status(200).json({
                data: postResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    findLimit = async (req, res) => {
        return await Model.Posts.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 5
        })

        .then( postResponse => {
            res.status(200).json({
                data: postResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    findOne = async (req, res) => {
        return await Model.Posts.findAll({
            where: {id: req.params.id },
        })
        .then( postResponse => {
            res.status(200).json({
                message: 'Success',
                data: postResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    pagination = async (req, res) => {
        let page = 0;
        let limit = 5;
      
        const offset = page ? page * limit : 0;

        return await Model.Posts.findAndCountAll()
        .then( (respone) => {

            const totalPages = Math.ceil(respone.count / limit);

            // Get All posts
            Model.Posts.findAll({
                // limit: limit,
                offset: offset,
                order: [
                    ['id', 'DESC']
                ],
            })
            .then( postResponse => {
                res.status(200).json({
                    data: postResponse,
                    totalItems: respone.count,
                    totalPages: totalPages

                });
            })
            .catch( error => {
                res.status(400).send(error);
            })
        })
        .catch( error => console.log(error))
    }

    create = async (req, res) => {
        return await Model.Posts.create({
            title: req.body.title,
            barcode: req.body.barcode,
            thumbnail: req.body.thumbnail,
            description: req.body.description,
            body: req.body.body,
            category_id: req.body.category_id,
            createdBy: 1,
            updatedBy:1,
        })
        .then( postResponse => {
            res.status(200).json({
                message: 'Success',
                data: postResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    update = async (req, res) => {
        return await Model.Posts.update(req.body, {
            where: {id: req.params.id }
        })
        .then( postResponse => {
            res.status(200).json({
                message: 'Success',
                data: postResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    postCount = async (req, res) => {
        return await Model.Posts.findAndCountAll()
        .then( respone => {
            res.status(200).json({
                data: respone.count,
                message: 'success'
            })
        })
        .catch( error => console.log(error))
    }

    destroy = async (req, res) => {
        return await Model.Posts.destroy({
            where: {id: req.params.id }
        })
        .then( postResponse => {
            res.status(200).json({
                message: 'Success',
                data: postResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }
}
module.exports = new PostController;