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

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        if (scroll >= ($('#machineries').offset().top - 300)) {
            $($('.machinery-grid img')[0]).addClass('rot-type1');
            $($('.machinery-grid img')[1]).addClass('rot-type2');
            $($('.machinery-grid img')[2]).addClass('rot-type3');
            $($('.machinery-grid img')[3]).addClass('rot-type4');
            $($('.machinery-grid img')[4]).addClass('rot-type5');
            $($('.machinery-grid img')[5]).addClass('rot-type3');
            $($('.machinery-grid img')[6]).addClass('rot-type2');
            $($('.machinery-grid img')[7]).addClass('rot-type1');
            $($('.machinery-grid img')[8]).addClass('rot-type4');
        }
        else {
            $($('.machinery-grid img')[0]).removeClass('rot-type1');
            $($('.machinery-grid img')[1]).removeClass('rot-type2');
            $($('.machinery-grid img')[2]).removeClass('rot-type3');
            $($('.machinery-grid img')[3]).removeClass('rot-type4');
            $($('.machinery-grid img')[4]).removeClass('rot-type5');
            $($('.machinery-grid img')[5]).removeClass('rot-type3');
            $($('.machinery-grid img')[6]).removeClass('rot-type2');
            $($('.machinery-grid img')[7]).removeClass('rot-type1');
            $($('.machinery-grid img')[8]).removeClass('rot-type4');
        }
        if (scroll >= ($('.short-card').offset().top - 800)) {
            $('.short-card').removeClass('img-type-left');
        }
        else {
            $('.short-card').addClass('img-type-left');
        }

        if (scroll >= ($('#about .card.type1').offset().top - 800)) {
            $('#about .card.type1').removeClass('img-type-left');
        }
        else {
            $('#about .card.type1').addClass('img-type-left');
        }

        if (scroll >= ($('#workplace .card.type1').offset().top - 600)) {
            $('#workplace .card.type1').removeClass('img-type-left');
        }
        else {
            $('#workplace .card.type1').addClass('img-type-left');
        }

        if (scroll >= ($('.card.type2').first().offset().top - 1000)) {
            $('.card.type2').removeClass('img-type-right');
        }
        else {
            $('.card.type2').addClass('img-type-right');
        }

        if (scroll >= ($('.card.type3').first().offset().top - 1000)) {
            $('.card.type3').removeClass('img-type-left');
        }
        else {
            $('.card.type3').addClass('img-type-left');
        }
        if(scroll >= ($('.contact-card').offset().top - 400)) {
            $('.contact-card').css('background', 'rgba(66, 152, 250, 0.082)');
        }
        else {
            $('.contact-card').css('background', 'white');
        }
    });

    $('.alt-nav-tab').addClass('hide');

    $('.menu').click(function() {
        $('.alt-nav-tab').toggleClass('hide');
    });

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
          $('.alt-nav-tab').addClass('hide');
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

function myMap() {
    
    var mapProp= {
        center:new google.maps.LatLng(13.1825065,80.1173892),
        zoom: 18
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var marker = new google.maps.Marker({position: new google.maps.LatLng(13.1825065,80.1173892)});
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content:"<div style='color:rgb(2, 58, 143);font-weight:400;'><h2><b>Rajpack</b></h2> No: T247, T6 Main Road, Sidco Women Industrial Estate, Kattur Village, Thirumullaivoyal, Chennai - 600 062.<div>"
    });
    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}