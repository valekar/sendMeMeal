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


Schemas.Item_food = new SimpleSchema({
    id:{
        type:String,
        label:"Food.id",
        max:200
    },
    price:{
        type:Number,
        label:"Food.Price"
    },
    name:{
        type:String,
        label:"Food.name"
    }
});


Schemas.Items = new SimpleSchema({
    item_quantity: {
        type: Number,
        label: "item Quantity"

    },
    food:{
       type:Schemas.Item_food,
        optional:false
    },

    item_ordered:{
      type:Boolean,
      label:"Is it ordered?"
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

