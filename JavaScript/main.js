$(document).ready(function(){
    let el = document.getElementById('text');

    console.log($('.profile-submenu a').first().text());
    console.log($('.profile-submenu a').last().text());

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

    $('p:contains("dread")').html("This had dread in it, it still does.");

    $('p').each(function(){
        console.log($(this).text());
    });

    if($(':contains("dread")').is("p")){
        console.log("dread is in a paragraph");
    }

    $('textarea').focusin(function(){
        console.log("Focused in on text area");
    });

    $('textarea').focusout(function(){
        console.log("Focused out of text area");
    });

    $('input[name=email]').focusout(function(){
        if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1){
            $('.status').html("Valid Email");
            $(this).css({
                background: 'green'
            });
        } else{
            $('.status').html("Invalid Email");
            $(this).css({
                background: 'red'
            });
        }
    });

    $('input').css({
        background: '#f00',
        padding: '10px',
        borderColor: '#000'
    });



});

