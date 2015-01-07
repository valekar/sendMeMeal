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
Food = new Meteor.Collection("food");



Schemas.Food = new SimpleSchema({
    name: {
        type: String,
        label: "Food Name",
        optional:false

    },
    price: {
        type: Number,
        label: "Food Price",
        optional:false

    },
    added_by: {
        type: String,
        label: "Added by admin id",
        optional:false
    },
    picture: {
        type: String,
        optional:false

    },
    food_type:{
        type:String,
        label:"Food Type(South/North)",
        optional:false
    }



});

Food.attachSchema(Schemas.Food);

