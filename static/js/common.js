
var change_color = document.querySelectorAll('.header__button > *');


change_color.forEach((element) => {
    element.onmouseover = function nigthActivate() {
        element.style.color = '#7684db';
    };
});


change_color.forEach((element) => {
    element.onmouseout = function nigthActivate() {
        element.style.color = 'white';
    };
});
