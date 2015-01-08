Schemas = {};





/************************ITEM*********************************/
/**
 The Schema structure for ITEM
 *   _id:String
 *   quantity:number
 *   food_id:String
 *   food_price:number
 *   created_by:String(UserId)
 */

/************************ITEM*********************************/
Items = new Meteor.Collection("items");



Schemas.Items = new SimpleSchema({
    quantity: {
        type: Number,
        label: "Quantity"

    },
    food_id:{
        type:String,
        label:"Food_id",
        max:200
    },
    food_price:{
        type:Number,
        label:"Food Price"

    },
    created_by:{
        type:String,
        label:"Created by user id"
    },
    item_sum_price:{
        type:Number,
        label:"Total price of current Item"
    }
});


Items.attachSchema(Schemas.Items);

