$(document).ready(function() {                          
    /* STICKY NAVIGATION POP UP */
    /* "waypopint" detects when we scroll to/away from an element: http://imakewebthings.com/waypoints/ */
    $('.js--section-features').waypoint( direction => {   //direction of scrolling
        direction == 'down' ?  $('nav').addClass('sticky') : $('nav').removeClass('sticky')
    }, {
        offset: '60px'  //it happens 60 pixels before we hit the feature section
    })


    /* HEADER BUTTONS AUTOSCROLL*/
    /* let's go button. once clicked scroll to the plans section */
    $('.js--scroll-to-plans').click( () => {
        /* that is how animated scroll work. we should always call jquery animate method on html and body tags */
        $('html, body').animate({scrollTop: $('.js--section-signup').offset().top}, 1000); // the last argument is the speed of scrolling in ms
    })
    /* not sure button */
    $('.js--scroll-to-features').click( () => { 
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  
    })


    /* NAVBAR BUTTON AUTOSCROLL */
    /* this code makes all of the 'a' tags scroll to an element with an id the same as their 'href' */
    /* the href must start with '#' signifying that it is refering to an id*/
    /*code taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click( function(event) {
        // On-page links
        if (
            /* here 'this' is the clicked 'a' tag */
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            /*
                //check these out:
                console.log(this.hash)
                console.log(this.href)
                console.log(this.hostname)
                console.log(this.pathname)
            */
            // Figure out element to scroll to
            var target = $(this.hash);  /* turn pathname into a Jquery object */
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                });
            }
        }
    });


    /*Animations of sections on scroll */
    /* waypoint: http://imakewebthings.com/waypoints/*/
    /* css animations: https://daneden.github.io/animate.css/ */

    /* steps section */
    $('.js--wp-2').waypoint( () => {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        'offset': '50%'
    } )

    /* about us section */
    $('.js--wp-3').waypoint( () => {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        'offset': '50%'
    } )

    /* signup section */
    $('.js--wp-4').waypoint( () => {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        'offset': '50%'
    } )


    // Navbar visibility toggle (make sure it is always visible after resize)
    /*--------------------------------------------------------*/
    const navbarUl = $('.js--main-nav');
    /* resize() method is an event listner. it listens for the window resize */
    $(window).resize(() => {
        if ($(window).width() >= 767){
            navbarUl.addClass('ul-display-block');
        } else {
            navbarUl.removeClass('ul-display-block');
        }           
    })

    /* Mobile Nav */
    $('.js--mobile-nav-icon').click( () => {
        /* toggle list view */
        const nav = $('.js--main-nav');
        nav.slideToggle(200);  /* this method toggles the visibility of the selected element */

        /* toggle button icon */
        const icon = $('.js--mobile-nav-icon i');

        if ( icon.hasClass('ion-navicon-round') ) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');        
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');        
        }

    })

    /* SECTION-WHO POPUPS: https://dimsemenov.com/plugins/magnific-popup/ */
    $('.js--authors div:nth-child(1) img').magnificPopup({
        items: {
          src: './images/peyman_kheiri_scaled.jpg',
          title: $('<div> <p>Hi! This is Payman. I study the Master of Cognitive Science in the university of Osnabreuck, Germany. I made this website template as a free resource. Feel free to use it for your websites! </p></div>'),
          type: 'image' 
        }
    });

    $('.js--authors div:nth-child(2) img').magnificPopup({
        items: {
            src: './images/jason_vorhees_scaled.jpg',
            title: $('<div> <p>Hi! This is Jason Vorhees. I am a psychological threat, stalking and killing other people. Feel free to be my victim!</p></div>'),
            type: 'image' 
          }
    });

    $('.js--authors div:nth-child(3) img').magnificPopup({
        items: {
            src: './images/freddy_krueger_scaled.jpg',
            title: $('<div><p>Hi! Freddy here! I am a burnt serial killer with a gloved hand and razors.I kill my his victims in their dreams, causing their deaths in the real world as well. Feeling sleepy? </p></div>'),
            type: 'image' 
          }
    });

    $('.js--authors div:nth-child(4) img').magnificPopup({
        items: {
            src: './images/Headless_Horseman_scaled.jpg',
            title: $('<div><p>I\'ve been searching for my head since 1820. </p></div>'),
            type: 'image' 
          }
    });

})