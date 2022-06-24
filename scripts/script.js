$(document).ready(function() {
    $(".burger").click(function() {
        $(".burger-menu").toggleClass("active");
        $(".right-tr").toggleClass("active-right-tr");
        $(".no-tr").toggleClass("active-no-tr");
        $(".left-tr").toggleClass("active-left-tr");
        $(".burger").click(function() {
            $(".support-hiden").removeClass("active-support");
            $(".burger-menu").removeClass("active-change-size");
            $(".fourth-eff").removeClass("fourth-eff-change-color");
            $(".counter").removeClass("active-counter");
        });
    });
    document.addEventListener("click", function(e) {
        const burg = document.querySelector(".burger");
        const click = e.composedPath().includes(burg);
        const supp = document.querySelector(".fourth-eff");
        const click2 = e.composedPath().includes(supp);
        if (!click && !click2) {
            $(".burger-menu").removeClass("active");
            $(".right-tr").removeClass("active-right-tr");
            $(".no-tr").removeClass("active-no-tr");
            $(".left-tr").removeClass("active-left-tr");
            $(".support-hiden").removeClass("active-support");
            $(".burger-menu").removeClass("active-change-size");
            $(".fourth-eff").removeClass("fourth-eff-change-color");
            $(".counter").removeClass("active-counter");
        }
    });
    $(".fourth-eff").click(function() {
        $(".support-hiden").toggleClass("active-support");
        $(".counter").toggleClass("active-counter");
        $(".burger-menu").toggleClass("active-change-size");
        $(".fourth-eff").toggleClass("fourth-eff-change-color");
    });
});