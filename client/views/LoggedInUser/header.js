
Template.headerLoggedInTemplate.rendered = function(){
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

    $("#myNav").affix({
        offset: {
            top: 220
        }
    });


    $("#myNav ul li a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = this.hash;
        });

    });


    //Session.set('myTemplate','registerTemplate');


};

//Template Header helpers
Template.headerLoggedInTemplate.helpers({
});

//HeaderTemplate events
Template.headerLoggedInTemplate.events({

    'click #logout':function(e,templ){
        Meteor.logout(function(error){
            if(error){
                alert("unable to logout");
            }

        });
    }


});
