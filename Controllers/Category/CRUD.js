const Categories = require("../../Models/categoryModel");
const knex = require("knex");

const AddCategory = async (req, res) => {

    let { id, name, description } = req.body;
    // let name = req.body.name;
    // let description = req.body.description;
    const resp = await Categories.query().insert({
        id: id,
        name: name,
        description: description
    })

    if (resp) {
        console.log(resp)
        res.json({
            success: "true",
            data: { id, name, description }

        })
    }
    else {
        res.send("error")
    }
}


module.exports = { AddCategory };