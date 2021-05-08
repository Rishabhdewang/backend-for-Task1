const { Model } = require("objection");
const Items = require("./itemModel");

class Cart extends Model {
    static get tableName() {
        return "carts"
    }
    static get relationMappings() {
        const Item = require("./itemModel");
        return {
            item: {
                relation: Model.BelongsToOneRelation,
                modelClass: Item,
                join: {
                    from: "items.id",
                    to: "carts.item_id"
                }
            }
        }
    }
}

module.exports = Cart;