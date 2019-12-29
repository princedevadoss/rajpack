$(document).ready(function() {
    $('.image-carousel > img').addClass('invisible');
    $('.image-carousel > img').first().attr('data-active', true).removeClass('invisible');
    $('#img-prev').click(function() {
        changeImage($('img[data-active="true"').data('id'), true, 5, 1);  
    });

    $('.short-card').click(function() {
        $.ajax({
            url: `/templates/${$(this).data('url')}.html`,
            type: 'GET',
            success: function(data) {
                $('.float-container').addClass('open-state');
                $('.float-container .modal').html(data);
            },
            error: function(err) {
                throw err;
            }
        });
    });

    $('.float-container').click(function() {
        $('.float-container').removeClass('open-state');
    });

    $('.modal').on('click', '#close', function() {
        $('.float-container').removeClass('open-state');
    });

    $('.float-container > .modal').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
    });

    $('#img-next').click(function() {
        changeImage($('img[data-active="true"').data('id'), false, 5, 1);  
    });

    function changer() {
        changeImage($('img[data-active="true"').data('id'), false, 5, 1);
    }

    var period = setInterval(changer, 4000);

    function changeImage(imgId, next, max, min) {
        var targetId = Number(imgId.split('-')[1]);
        if (next) {
            targetId++;
            if (targetId >= (max + 1)) {
                targetId = min;
            }
        }
        else {
            targetId--;
            if (targetId <= (min - 1)) {
                targetId = max;
            } 
        }
        var targetImgId = 'img-' + targetId;
        $('.image-carousel > img').addClass('invisible').removeAttr('data-active');
        $('[data-id="' + targetImgId + '"]').attr('data-active', true).removeClass('invisible');
        clearInterval(period);
        period = setInterval(changer, 4000);
    }

    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          console.log(hash);
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
          }, 800, function(){
            window.location.hash = hash;
          });
        }
    });
});

function onloader() {
    history.replaceState(null, null, ' ');
    $('html, body').animate({
    scrollTop: 0
    }, 200);
}