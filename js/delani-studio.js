$(document).ready(function () {
    // hide all the paragraph descriptions
    $('.text-block1').hide();
    $('.text-block2').hide();
    $('.text-block3').hide();
    $('.text-block4').hide();
    $('.text-block5').hide();
    $('.text-block6').hide();
    $('.text-block7').hide();
    $('.text-block8').hide();
    // $('img#8').animate({
    //     opacity: 1
    // });
    //create a hover effect on each photo on portfolio
    $('img#work1').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block1').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block1').fadeToggle();
    });

    $('img#work2').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block2').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block2').fadeToggle();
    });

    $('img#work3').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block3').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block3').fadeToggle();
    });
    $('img#work4').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block4').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block4').fadeToggle();
    });
    
    $('img#work5').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block5').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block5').fadeToggle();
    });

    $('img#work6').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block6').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block6').fadeToggle();
    });

    $('img#work7').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block7').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block7').fadeToggle();
    });

    $('img#i8').hover(function () {
        $(this).stop().animate({ opacity: .4 });
        $('.text-block8').fadeToggle();
    }, function () {
        $(this).stop(true, true).animate({ opacity: 1 });
        $('.text-block8').fadeToggle();
    });



    $('img#design').click(function () {
        $('h4#design').css("font-weigh", "bold");
        $('.clickable-a').toggle();
        $('.design').toggle();
    });
    $('.clickable-a').click(function () {
        $('.design').toggle();
        $('.clickable-a').toggle();
    });

    $('img#development').click(function () {
        $('h4').css('font-weight', 'bold');
        $('.clickable-b').toggle();
        $('.development').toggle();
    });
    $('.clickable-b').click(function () {
        $('.development').toggle();
        $('.clickable-b').toggle();
    });

    $('img#product').click(function () {
        $('h4').css('font-weight', 'bold');
        $('.clickable-c').toggle();
        $('.product').toggle();
    });
    $('.clickable-c').click(function () {
        $('.product').toggle();
        $('.clickable-c').toggle();
    });

    $('button#submitform').click(function(event){
        var name = $('input#name').val();

        alert('Hi ' + name + ' we have received your message. Thank you for reaching out to us');

        event.preventDefault();
    })
});