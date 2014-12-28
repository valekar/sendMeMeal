Template.headerTemplate.rendered = function(){
    $('ul.nav li.dropdown').hover(function(){
        $('#password').show();
        $('#forgot_password').show();
        $('.dropdown-menu',this).parent().addClass('open');
        $('.dropdown-menu',this).fadeIn('fast');

    },function(){
        $('.dropdown-menu',this).fadeOut('fast');
        $('.dropdown-menu',this).parent().removeClass('open');
    });


    $('ul.nav li.dropdown').click(function(){
     //$('#password').show();
       // $('#forgot_password').show();
        $('.dropdown-menu',this).fadeIn('fast');
    });

    $('#back_button').hide();

};




Template.headerTemplate.events({
    'click #forgot_password':function(event,templ){
        $('#password').hide();
        $('#forgot_password').hide();
        $('#back_button').show();

    },

    'click #back_button':function(e,templ){
        e.preventDefault();
        $('#password').show();
        $('#forgot_password').show();
        $('#back_button').hide();
    }
})


Meteor.subscribe('itemList');