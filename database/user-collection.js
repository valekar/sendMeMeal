/*
Schemas = {};
Schemas.UserProfile = new SimpleSchema({
    personalName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: false
    },

    email: {
    type: String,
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: false
    },
    "email.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "email.$.verified": {
        type: Boolean
    }
   */
/* emails:{
        type:String,
        regEx: SimpleSchema.RegEx.Email,
        //regEx:/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
        optional:false

    }*//*
,
    company_id:{
        type:String,
        optional:false
    }
});




Schemas.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[789]\d{9}$/
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },

    services: {
        type: Object,
        optional: true

    }
    // Add `roles` to your schema if you use the meteor-roles package.
    // Note that when using this package, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
  */
/*  roles: {
        type: Object,
        optional: true,
        blackbox: true
    }*//*

});

Meteor.users.attachSchema(Schemas.User);*/
