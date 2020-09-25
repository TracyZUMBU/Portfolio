
    // function that filter the categories of the projects
    $(document).ready(function () {
        $(".btn").click(function () {
            var name = $(this).attr("data-filter");
            if (name == "all") {
                $(".gallery__item").show("2000");
            }
            else {
                $(".gallery__item").not("." + name).hide("2000");
                $(".gallery__item").filter("." + name).show("2000")
            }
        })
    })

    // function that handle the background color of <ul> categorie__list
    $(document).on('click', 'ul li', function () {
        $(this).addClass("active").siblings().removeClass("active")
    })

    // function that toggle navbar's list
    $(document).ready(function () {
        $(document).on('click', '.nav__items', function () {
            if (window.innerWidth < 750) {
                $('.nav__items li').toggle()
            } else {
                $('.nav__items li').show()
            }
        })
    })

    // function that close the dropdown menu when clicking on a nav's item
    $(document).ready(function () {
        $(document).on('click', '.fas', function () {
            if (window.innerWidth < 750) {
                $('.nav__items li').toggle()
            } else {
                $('.nav__items li').show()
            }
        })
    })

    // function that show "gallery_hover" class

    // if ($(window).width() < 1199){
    //     console.log('blajj');
    // }

    // $(document).on('click', '.gallery__item', function(){
    //     $(this).parent().find('.gallery__hover').css({
    //         "position": "absolute",
    //         "transition": ".5s all",
    //         "top": "0",
    //         "z-index": "2",
    //         "color": "var(--color-secondary-white-light)",
    //         "background": "rgba(0, 0, 0, 0.66)",
    //         "opacity": "1" 
    //     })
    //     console.log('bla')
    // })

