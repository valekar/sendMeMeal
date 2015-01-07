Router.route('/',{


    onWait:function(){
        return [
            Meteor.subscribe('companiesList'),
            Meteor.subscribe('uploads'),
            Meteor.subscribe('foodList')
        ]
    },

    onBeforeAction: function () {

        if(Meteor.user()){
            this.redirect('/profile');
        }else{
            this.next();
        }
    },


    action:function(){
        //only for guest users
        this.render('mainGuestTemplate',{to:'guestUser'});
        this.render('headerGuestTemplate',{to:'guestHeader'});
        this.render('footerGuestTemplate',{to:'guestFooter'});

        this.layout('ApplicationLayout');
    }



});


Router.route('/profile',{

    waitOn: function () {
        // return one handle, a function, or an array
        return  [
            Meteor.subscribe('adminUser',Meteor.userId()),
            Meteor.subscribe('uploads'),
            Meteor.subscribe('foodList')
        ];

    },
    onBeforeAction: function () {

        Session.keys ={};
        this.next();
    },
    action:function(){
        //only for guest users
        if(Meteor.user()){
            this.render('mainLoggedInTemplate',{to:'loggedInUser'});
            this.render('headerLoggedInTemplate',{to:'loggedInHeader'});
            this.render('footerLoggedInTemplate',{to:'loggedInFooter'});

            this.layout('LoggedInLayout');
        }
        else{
            this.redirect('/');
        }

    }
});


