const Item = require("../../Models/itemModel");
const knex = require("knex");

const AddItem = async (req, res) => {

    let { id, name, description, price, category_id } = req.body;
    const resp = await Item.query().insert({
        id, category_id, name, description, price
    })
    if (resp) {
        res.json({
            success: "true",
            data: resp
        })
    }
    else {
        res.json({
            status: false,
            msg: "unable to Add Category"
        })
    }
}

const getItembyCatId = async (req, res) => {
    let id = req.params.id;
    console.log(id)

    const resp = await Item.query().where("category_id", id);
    if (resp) {
        res.json({
            status: true,
            data: resp
        })
    }
    else {
        res.json({
            status: false,
            msg: "unable to get Items"
        })
    }

}

const getItembyId = async (req, res) => {
    let id = req.params.id;
    console.log(id)

    const resp = await Item.query().where("id", id);
    if (resp) {
        res.json({
            status: true,
            data: resp
        })
    }
    else {
        res.json({
            status: false,
            msg: "unable to get Items"
        })
    }
}

module.exports = { AddItem, getItembyCatId, getItembyId };