document.addEventListener("DOMContentLoaded", function(){
    var scrollButtons = document.getElementsByClassName("scroll-button");

    for (i = 0; i < scrollButtons.length; i++) {
        scrollButtons[i].addEventListener("click", function() {
            var details = this.parentElement.parentElement.getElementsByClassName("profile-detail-container");
            details[0].scrollIntoView({ behavior: "smooth"});
        });
    }
    var pages = document.getElementsByClassName("page");
    for (var j = 0; j < pages.length; j++) {
        pages[j].addEventListener('scroll', function () {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 0;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add("reveal-active");
                } else {
                    reveals[i].classList.remove("reveal-active");
                }
            }

        });
    }
});


/* function p1(){

    $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p1").css({
       "background":"#1AE8E4"
   });
}
function p2(){
       $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p2").css({
       "background":"#1AE8E4"
   });
}
function p3(){
     $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p3").css({
       "background":"#1AE8E4"
   });
}
function p4(){
     $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p4").css({
       "background":"#1AE8E4"
   });
}

function irAProyecto(e){
    window.localStorage.setItem("numProyecto", e);
    window.location.href = "proyectos.html";
} */