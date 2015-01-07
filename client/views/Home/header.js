//HeaderTemplate Renders
Template.headerGuestTemplate.rendered = function(){
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

//Template Header helpers
Template.headerGuestTemplate.helpers({
    'myTemplate':function(){

        return Session.get('myTemplate');
    }
});

//HeaderTemplate events
Template.headerGuestTemplate.events({

    //for showing registerTemplate
    'click #Register':function(e,templ){
        Session.set('myTemplate','registerTemplate');


    },
    //for showing loginTemplate
    'click #Login':function(e,templ){
        Session.set('myTemplate','loginTemplate');
    },
    //for shoing goegotTemplate
    'click #forgot_password':function(e,templ){
        Session.set('myTemplate','forgotTemplate');
    },
    //getting back to loginTemplate
    'click #Back':function(e,templ){
        e.preventDefault();
        Session.set('myTemplate','loginTemplate');
    }

});

