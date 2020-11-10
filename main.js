 var prev = document.getElementById("btn-prev");
 var next = document.getElementById("btn-next");

 var items = document.getElementsByClassName("box");
 var index = 0;

 function btnNext() {
     index++;
     if (index == items.length) {
         index = 0;
     }
     showItem();
     reset();
     switchBtn();
 }

 function btnPrev() {
     index--;
     if (index == -1) {
         index = items.length -1;
     }
     showItem();
     reset();
     switchBtn();
 }

 next.onclick = btnNext;
 prev.onclick = btnPrev;

function showItem() {
    for (var i=0; i<items.length; i++) {
        items[i].classList.remove("box-active");
    }
    items[index].classList.add("box-active");
}

var duration = document.getElementById("wrapper").getAttribute("data-slider-dur");
console.log(duration);

var autoSlider = setInterval(btnNext, duration);

function reset() {
    clearInterval(autoSlider);
    autoSlider = setInterval(btnNext, duration);
}

var btn = document.getElementsByClassName("btn-bottom");

for (var i=0; i < btn.length; i++) {
    btn[i].onclick = function() {
        index = this.getAttribute("data-slider-item") - 1;
        showItem();
        reset();
        switchBtn();
    }
}

function switchBtn() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove("btn-active");
    }
    btn[index].classList.add("btn-active");
}