var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("content");
        // this.classList.toggle("fa-minus");
    });
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

