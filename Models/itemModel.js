const { Model } = require("objection");

class Items extends Model {
    static get tableName() {
        return "items"
    }
    static get relationMappings() {
        const categories = require("./categoryModel");
        const cart = require("./CartModal");
        return {
            category: {
                relation: Model.BelongsToOneRelation,
                modelClass: categories,
                join: {
                    from: Items.category_id,
                    to: categories.id
                }
            },
            cart: {
                relation: Model.HasManyRelation,
                modelClass: cart,
                join: {
                    from: cart.item_id,
                    to: Items.id
                }
            }
        }
    }
}

module.exports = Items;