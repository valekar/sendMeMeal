Schemas = {};
/************************FOOD*********************************/
/**
 * The Schema For Food
 * _id:String
 * name:String
 * price:number
 * added_by:String(UserId)
 * */
/************************FOOD*********************************/
Food = new Mongo.Collection("food");



Schemas.Food = new SimpleSchema({
    name: {
        type: String,
        label: "Food Name"

    },
    price: {
        type: Number,
        label: "Food Price"

    },
    added_by: {
        type: String,
        label: "Added by admin id"
    },
    picture: {
        type: String

    }



});

Food.attachSchema(Schemas.Food);

