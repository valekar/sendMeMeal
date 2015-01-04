/************************ORDER*********************************/
/**
 * The Schema for Order
 * _id:String
 * created_by:String
 * item_ids:Array(Only USed for display)
 *
 * */

/************************ORDER*********************************/
Schemas ={};
Orders = new Meteor.Collection("orders");


Schemas.Orders = new SimpleSchema({
   created:{
       type:"String",
       label:"Created by user id"
   },
    items_ids:{
        type:[Object],
        label:"Item ids ordered"
    }
});

Orders.attachSchema(Schemas.Orders);
