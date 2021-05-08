const { Model } = require("objection");
const { HasOneRelation } = require("./itemModel");

class Categories extends Model {
    static get tableName() {
        return "categories"
    }

    static get relationMappings() {
        const Item = require("./itemModel");
        return {
            item: {
                relation: Model.HasManyRelation,
                modelClas: Item,
                join: {
                    from: Categories.id,
                    to: Item.category_id
                }
            }
        }
    }
}

module.exports = Categories;