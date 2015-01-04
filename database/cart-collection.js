/************************CART*********************************/
/**
 * The Schema for Cart
 * _id:String
 * items_ids:Array
 * total_price:number
 * created_by
 * */


/************************CART*********************************/

Schemas = {};

Cart = new Meteor.Collection("cart");



Schemas.Cart = new SimpleSchema({
    items_ids:{
        type:[Object],
        label:"Number of itmes ids"
    },
    total_price:{
        type:Number,
        label:"Total final price"
    },
    created_by:{
        type:String,
        label:"Created by user id"
    }


});

Cart.attachSchema(Schemas.Cart);
