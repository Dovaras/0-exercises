const resetQuery = document.querySelector('reset');
const minusQuery = document.querySelector('minus');
const plusQuery = document.querySelector('plus');

function resetClick() {
    document.getElementsByClassName('number').value = 0;
}
function minusClick() {
    document.getElementsByClassName('number').value--;
}
function plusClick() {
    document.getElementsByClassName('number').value++;
}

resetQuery.addEventListener('click', resetClick);
minusQuery.addEventListener('click', minusClick);
plusQuery.addEventListener('click', plusClick);
/*
Uncaught ReferenceError: plusClick is not defined
    at HTMLButtonElement.onclick
*/