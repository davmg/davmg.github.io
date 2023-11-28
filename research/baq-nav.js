
var currentPage;
var pages;
var pageIndicators;
var btnSiguiente;
var btnAnterior;

document.addEventListener("DOMContentLoaded", function(){
    btnSiguiente = document.getElementById("btn-siguiente");
    btnAnterior = document.getElementById("btn-anterior");
    currentPage = 3;
    pages = document.getElementsByClassName("page");
    pageIndicators = document.getElementsByClassName("punto-navegacion");
    console.log(currentPage);
    setTimeout(function(){
        goToPage(0);
    },400);

    btnSiguiente.addEventListener("click", function() {
        if(currentPage < pages.length-1){
            /* Avoid double clicks */
            btnSiguiente.disabled = true;
            btnAnterior.disabled = true;
            if(currentPage==0){
                btnAnterior.style.display="block";
            }
            if(currentPage==pages.length-2){
                btnSiguiente.style.display="none";
            }

            /* Animate pages */
            pages[currentPage].classList.remove("activo");
            pages[currentPage].classList.add("pasado");

            pages[currentPage+1].classList.remove("proximo");
            pages[currentPage+1].classList.add("activo");

            /* Update indicators */
            pageIndicators[currentPage+1].classList.remove("punto-proximo");
            pageIndicators[currentPage+1].classList.add("punto-actual");
            pageIndicators[currentPage].classList.remove("punto-actual");
            pageIndicators[currentPage].classList.add("punto-proximo");

            setTimeout(function(){
                pages[currentPage].scrollTo(0,0);
                currentPage++;
                btnSiguiente.disabled = false;
                btnAnterior.disabled = false;
                console.log(currentPage);
            }, 500);
        }
    });

    btnAnterior.addEventListener("click", function() {
        if(currentPage > 0){
            /* Avoid double clicks */
            btnSiguiente.disabled = true;
            btnAnterior.disabled = true;
            if(currentPage==1){
                btnAnterior.style.display="none";
            }
            if(currentPage==pages.length-1){
                btnSiguiente.style.display="block";
            }

            /* Animate pages */
            pages[currentPage-1].classList.remove("pasado");
            pages[currentPage-1].classList.add("activo");

            pages[currentPage].classList.remove("activo");
            pages[currentPage].classList.add("proximo");

            /* Update indicators */
            pageIndicators[currentPage-1].classList.remove("punto-proximo");
            pageIndicators[currentPage-1].classList.add("punto-actual");
            pageIndicators[currentPage].classList.remove("punto-actual");
            pageIndicators[currentPage].classList.add("punto-proximo");

            setTimeout(function(){
                pages[currentPage].scrollTo(0,0);
                currentPage--;
                btnSiguiente.disabled = false;
                btnAnterior.disabled = false;
                console.log(currentPage);
            }, 500);
        }
    });

    var counter = 1500;
    var counterText = document.getElementById("text-counter");

    setInterval(() => {
        counter++;
        if(counter>9999) counter = 1500;
        counterText.innerHTML = counter;
    }, 100);
});

function goToPage(e) {
    if (currentPage != e) {
        if (e > currentPage) { //Going to next page
            var i;
            for (i = 0; i < e; i++) {
                pages[i].classList.remove("activo");
                pages[i].classList.remove("proximo");
                pages[i].classList.add("pasado");
            }
            pages[e].classList.remove("proximo");
            pages[e].classList.add("activo");
        } else {  //Going to previous page
            var i;
            for (i = currentPage; i > e; i--) {
                pages[i].classList.remove("activo");
                pages[i].classList.remove("pasado");
                pages[i].classList.add("proximo");
            }
            pages[e].classList.remove("pasado");
            pages[e].classList.add("activo");
        }

        setTimeout(function () {
            pages[currentPage].scrollTo(0, 0);
        }, 50);

        pageIndicators[e].classList.remove("punto-proximo");
        pageIndicators[e].classList.add("punto-actual");
        pageIndicators[currentPage].classList.remove("punto-actual");
        pageIndicators[currentPage].classList.add("punto-proximo");
        currentPage = e;

        if(currentPage==0){
            btnAnterior.style.display="none";
            btnSiguiente.style.display="block";
        }else if(currentPage==pages.length-1){
            btnAnterior.style.display="block";
            btnSiguiente.style.display="none";
        }else{
            btnAnterior.style.display="block";
            btnSiguiente.style.display="block";
        }
    }
}

/* function navegarAProyecto(e){
    var i;

    pageIndicators[0].classList.remove("punto-actual");
    pageIndicators[0].classList.add("punto-proximo");

    for(i = 0; i < e; i++){
        pages[i].classList.remove("activo");
        pages[i].classList.remove("proximo");
        pages[i].classList.add("pasado");
    }
    pages[e].classList.remove("proximo");
    pages[e].classList.add("activo");

    pageIndicators[e].classList.remove("punto-proximo");
    pageIndicators[e].classList.add("punto-actual");

    nextIndex = parseInt(e) + 1;
} */
