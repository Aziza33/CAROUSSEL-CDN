var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: 2,
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
        autoplay: true,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
    },

    pagination: {
        el: ".swiper-pagination",
    }
});

// Particles
particlesJS("particles-js", {
    "particles":{
        "number":{"value":30,
            "density":{
                "enable":true,
                "value_area":800}},
                "color":{"value":"#ffffff"},
                "shape":{
                    "type":"circle",
                    "stroke":{"width":0,"color":"#000000"},
                    "polygon":{"nb_sides":5},
                    "image":{"src":"img/github.svg","width":50,"height":50}},
                    "opacity":{"value":0.6,
                        "random":false,
                        "anim":{
                            "enable":true,
                            "speed":1,
                            "opacity_min":0.1,
                            "sync":false}},
                    "size":{"value":5,"random":true,"anim":{"enable":true,"speed":4,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"none","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;