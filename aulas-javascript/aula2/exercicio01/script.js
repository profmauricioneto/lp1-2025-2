function modificar() {
    let items = document.querySelectorAll('ul li');
    console.log(items);

    // for (let element of items) {
    //     element.textContent = 'item modificado';
    // }
    items.forEach(function(element) {
        element.textContent = 'item modificado';
    })
}