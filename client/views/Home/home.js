Template.headerTemplate.rendered = function(){
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    if ($(window).width()>=640) {
        $('ul.nav li.dropdown').hover(function () {
            $('.dropdown-menu', this).parent().addClass('open');
            $('.dropdown-menu', this).fadeIn('fast');

        }, function () {
            $('.dropdown-menu', this).fadeOut('fast');
            $('.dropdown-menu', this).parent().removeClass('open');
        });
    }

    $('.selectpicker').selectpicker();
   // $('#register').parent().addClass('active');



    Session.set('myTemplate','registerTemplate');


};

Template.headerTemplate.helpers({
   'myTemplate':function(){

       return Session.get('myTemplate');
   }
});


Template.headerTemplate.events({

    'click #Register':function(e,templ){
        Session.set('myTemplate','registerTemplate');


    },
    'click #Login':function(e,templ){
        Session.set('myTemplate','loginTemplate');
    },
    'click #forgot_password':function(e,templ){
        Session.set('myTemplate','forgotTemplate');
    },
    'click #Back':function(e,templ){
        e.preventDefault();
    Session.set('myTemplate','loginTemplate');
}

});


Meteor.subscribe('itemList');