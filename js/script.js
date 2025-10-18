$(document).ready(function(){
  // Enhanced scroll to top functionality
  $('.fa-chevron-up, #scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'easeInOutQuart');
        return false;
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);
        
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - 70
            }, 800, 'easeInOutQuart');
        }
    });

    // Enhanced navbar scroll effect
    let lastScrollTop = 0;
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        
        if (scrollTop > 100) {
            $('#navbar').addClass('scrolled');
            
            // Hide/show navbar on scroll
            if (scrollTop > lastScrollTop && scrollTop > 500) {
                $('#navbar').addClass('nav-hidden');
            } else {
                $('#navbar').removeClass('nav-hidden');
            }
        } else {
            $('#navbar').removeClass('scrolled nav-hidden');
        }
        
        lastScrollTop = scrollTop;
    });

    // Parallax effect for hero section
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        const rate = scrolled * -0.5;
        $('#particles-js').css('transform', 'translateY(' + rate + 'px)');
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    $('.animate-on-scroll').each(function() {
        observer.observe(this);
    });

    // Enhanced typing cursor animation
    setInterval(function() {
        $('.cursor').fadeToggle();
    }, 500);

    // Add hover effects to cards
    $('.domain-card, .project-card, .timeline-content').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );

    // Mobile menu enhancement
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('active');
        $('.navbar-collapse').toggleClass('show');
    });

    // Close mobile menu when clicking on a link
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').removeClass('active');
    });

    // Enhanced social link hover effects
    $('.social-link').hover(
        function() {
            $(this).addClass('pulse');
        },
        function() {
            $(this).removeClass('pulse');
        }
    );

    // Add loading states for external links
    $('a[target="_blank"]').click(function() {
        const $this = $(this);
        const originalText = $this.text();
        $this.text('Loading...');
        
        setTimeout(function() {
            $this.text(originalText);
        }, 2000);
    });

    // Enhanced progress bar animations
    $('.skill-progress').each(function() {
        const $this = $(this);
        const skillLevel = $this.attr('data-skill');
        
        $(window).scroll(function() {
            const scrollTop = $(window).scrollTop();
            const elementTop = $this.offset().top;
            const elementHeight = $this.height();
            const windowHeight = $(window).height();
            
            if (scrollTop > (elementTop - windowHeight + elementHeight)) {
                $this.animate({
                    width: skillLevel + '%'
                }, 2000, 'easeOutQuart');
            }
        });
    });

    // Add custom cursor effects
    $(document).mousemove(function(e) {
        $('.custom-cursor').css({
            left: e.pageX,
            top: e.pageY
        });
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Apply debounce to scroll events
    $(window).on('scroll', debounce(function() {
        // Heavy scroll operations here
    }, 16)); // ~60fps

});
