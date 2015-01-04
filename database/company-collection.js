
/************************COMPANY*********************************/
/**
 * The Scehma for company
 * _id:String
 * name:String
 * location:String
 * */
Companies = new Mongo.Collection("company");
/************************COMPANY*********************************/


Schemas ={}

Schemas.Companies = new SimpleSchema({
    name:{
        type:String,
        label:"Name of the company"
    },
    location:{
        type:String,
        label:"Location of the company"
    }
});

Companies.attachSchema(Schemas.Companies);
