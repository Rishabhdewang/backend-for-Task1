const router = require("express").Router();
// const AddCategory = require("../Controllers/Category/CRUD");
const category = require("../Controllers/Category/CRUD")
const item = require("../Controllers/Item/CRUD")
const cart = require("../Controllers/Cart/CRUD")

router.post("/addcategory", category.AddCategory)
router.post("/additem", item.AddItem)
router.get("/getitembycatid/:id", item.getItembyCatId)
router.get("/getitembyid/:id", item.getItembyId)

//Cart
router.post("/addtocart/:id", cart.AddToCart)
router.get("/cartitems", cart.CartItems)
router.delete("/deleteitem/:id", cart.DeleteItem)
router.delete("/emptycart", cart.EmptyCart)
router.put("/updatequantity/:id", cart.UpdateQuantity)

module.exports = router;