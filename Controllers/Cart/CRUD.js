const Cart = require("../../Models/CartModal");

const AddToCart = async (req, res) => {
    const itemid = req.params.id;
    let quantity = 1;
    const response = await Cart.query().insert({
        item_id: itemid,
        quantity: quantity
    })
    if (response) {
        res.json({
            status: true,
            data: response
        })
    } else {
        res.json({
            status: false,
            msg: "Unable to Add to Cart"
        })

    }
}

const CartItems = async (req, res) => {

    const response = await Cart.query().withGraphFetched("item");
    if (response) {
        res.json({
            status: true,
            data: response
        })
    } else {
        res.json({
            status: false,
            msg: "Unable to Get Cart Items"
        })

    }
}

const UpdateQuantity = async (req, res) => {

    const updatedquantity = req.body.quantity;
    const id = req.params.id;
    const response = await Cart.query().findById(id).patch({
        quantity: updatedquantity
    });
    if (response) {
        res.json({
            status: true,
            data: response
        })
    } else {
        res.json({
            status: false,
            msg: "Unable to Update Quantity"
        })
    }
}

const DeleteItem = async (req, res) => {

    const id = req.params.id;
    const response = await Cart.query().deleteById(id)
    if (response) {
        res.json({
            status: true,
            data: response
        })
    } else {
        res.json({
            status: false,
            msg: "Unable to Update Quantity"
        })
    }
}

const EmptyCart = async (req, res) => {

    // const response = Cart.query().delete().where('id', '>', 0);
    const response = Cart.query().truncate();
    if (response) {
        res.json({
            status: true,
            msg: "Successfully Cleared",
            cart: response
        })
    } else {
        res.json({
            status: false,
            msg: "Unable to Clear Cart Items"
        })
    }
}

module.exports = {
    AddToCart,
    CartItems,
    UpdateQuantity,
    DeleteItem,
    EmptyCart
}