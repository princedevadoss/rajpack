$(document).ready(function() {
    $('.image-carousel > img').addClass('invisible');
    $('.image-carousel > img').first().attr('data-active', true).removeClass('invisible');
    $('#img-prev').click(function() {
        changeImage($('img[data-active="true"').data('id'), true, 5, 1);  
    });

    function loadTemplate(url, imageUrl, imageHeader) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                $('.float-container').addClass('open-state');
                $('.float-container .modal').html(data);
                if (imageUrl) {
                    $('.machinery-content').html(`<img style="width:100%;height:100%;" src="${imageUrl}"/>`);
                }
                if (imageHeader) {
                    $('.machinery-header').html(imageHeader);
                }
            },
            error: function(err) {
                throw err;
            }
        });
    }

    $('.short-card').click(function() {
        loadTemplate(`/templates/${$(this).data('url')}.html`);
    });

    $('#feedback, #enquiry').click(function() {
        loadTemplate(`/templates/${$(this).data('url')}.html`);
    });

    $('.float-container').click(function() {
        $('.float-container').removeClass('open-state');
    });

    function formSubmission(url, data) {
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            beforeSend: function() {
                $('.loading-modal').removeClass('hide');
                $('.modal').addClass('hide');
            },
            success: function(data) {
                $('.float-container').removeClass('open-state');
            },
            error: function(err) {
                throw err;
            },
            complete: function() {
                $('.loading-modal').addClass('hide');
                $('.modal').removeClass('hide');
            }
        });
    }

    $('.modal').on('click', '.form-btn', function() {
        if ($(this).data('action') === 'feedback') {
            formSubmission('/app/api/feedback', {
                email: $('input[name="email"]').val(),
                comment: $('textarea[name="comment"]').val()
            });
        }
        else {
            formSubmission('/app/api/enquiry', {
                name: $('input[name="name"]').val(),
                email: $('input[name="email"]').val(),
                contact: $('input[name="contact"]').val(),
                message: $('textarea[name="message"]').val()
            });
        }
    });

    $('.machinery-text').click(function() {
        loadTemplate(`/templates/machinery.html`, $(this).siblings('img').attr('src'), $(this).data('header'));
    })

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