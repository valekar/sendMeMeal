
/************************ITEM*********************************/
/**
   The Schema structure for ITEM
 *   _id:String
 *   quantity:number
 *   food_id:String
 *   food_price:number
 *   created_by:String(UserId)
 */

Item = new Mongo.Collection("item");

/************************ITEM*********************************/

/************************CART*********************************/
/**
 * The Schema for Cart
 * _id:String
 * items_ids:Array
 * total_price:number
 * created_by
 * */
Cart = new Mongo.Collection("cart");

/************************CART*********************************/

/************************ORDER*********************************/
/**
 * The Schema for Order
 * _id:String
 * created_by:String
 * item_ids:Array(Only USed for display)
 *
 * */
Order = new Mongo.Collection("order");
/************************ORDER*********************************/

/************************FOOD*********************************/
/**
 * The Schema For Food
 * _id:String
 * name:String
 * price:number
 * added_by:String(UserId)
 * */
Food = new Mongo.Collection("food");
/************************FOOD*********************************/

/************************COMPANY*********************************/
/**
 * The Scehma for company
 * _id:String
 * name:String
 * location:String
 * */
Companies = new Mongo.Collection("company");
/************************COMPANY*********************************/

/************************USER*********************************/
/**
 * User Schema Not required as it is created by accounts_password package
 * name:String
 * phone_number:number
 * company:String
 * */
/************************USER*********************************/