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
    ////////////////////////////////////////////////////////////////////////////////////////
    $(".dirlink").click(function() {
        $(".directory").toggleClass("dirsize");
        $(".list").toggleClass("listsize");
        $(".arrow").toggleClass("active-counter");
    });
    document.addEventListener("click", function(e) {
        const drlink = document.querySelector(".dirlink");
        const drlinkClick = e.composedPath().includes(drlink);
        if (!drlinkClick) {
            $(".directory").removeClass("dirsize");
            $(".list").removeClass("listsize");
            $(".arrow").removeClass("active-counter");
        }
    });
    const observer = new IntersectionObserver((e) => {
        e.forEach((e) => {
            console.log(e)
            if (e.isIntersecting) {
                e.target.classList.add("show");
            } else {
                e.target.classList.remove("show");
            }
        });
    });
    const helms = document.querySelectorAll(".hidden");
    helms.forEach((el) => observer.observe(el));
});

/*function showhelms() {
    if (helms.isIntersecting) {
        helms.target.classList.add("show");   
    } else {
        helms.target.classList.remove("show");
    }
}
const helms = document.querySelectorAll(".hidden");
showhelms();*/