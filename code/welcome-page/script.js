function removeDiv() {
    var div = document.querySelector('.satyameva');
    if (div) {
        div.parentNode.removeChild(div);
    }
}
setTimeout(removeDiv, 10000);