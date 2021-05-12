$(document).ready(function(){

    $(document).on('contextmenu', function(){
        return false;
    })

    $(document).on('mousedown', function(event){
        event.stopPropagation();
        console.log(event.buttons);

        $('.hidden').removeClass('shown');

        if ($(event.target).is('img')){
            $('.saveimg, .newtab').addClass('shown');
        }
        else if($(event.target).is('a')){
            $('.newtab').addClass('shown');
        }

        if(event.buttons === 2){
            console.log("Right mouse...");
            console.log(event.pageX, event.pageY)
            $('#context').css({top: event.pageY, left: event.pageX});
            $('#context').fadeIn(250);
            return false;
        }

        $('#context').fadeOut(250);
    });

    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        let submenu = $(this).parent().find('.profile-submenu');
        submenu.fadeIn(250);

        $('.profile-menu').on('mouseleave', function(){
            submenu.fadeOut(250);
        });
    });

    $('[href="https://google.com"]').on('click', function(event) {
        console.log("linking to google?");
        return false;
    });

    $('#prepend, #append, #replace').on('click', function(e){
        let el = $(e.currentTarget);
        let action = el.attr('id');
        let content = $('.text').val();

        if(action === "prepend"){
            console.log("Prepending...")
            $('.copy-pasta').prepend(content);
        }
        else if(action === "append"){
            console.log("Appending...")
            $('.copy-pasta').append(content);
        }
        else if(action === "replace"){
            console.log("Replacing...")
            $('.copy-pasta').html(content);
        }

        $('.text').val('');
    });

});

