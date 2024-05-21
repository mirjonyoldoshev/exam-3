"use strict";

const data = JSON.parse(localStorage.getItem('data')) || []
const CarsWrapper = document.querySelector('#wiew-cars-wrapper')

data.sort((a, b) => b.stock - a.stock);

function DeleteItem(e){
    if(e.target.classList.contains('delete')){
        const deleteData = data.filter((item) => {
            return item.id!= e.target.id
        })
        localStorage.setItem('data', JSON.stringify(deleteData))
        window.location.reload()
    }
}

document.addEventListener('click', (e) => {
    DeleteItem(e)
})

if(data.length > 0) {
    CarsWrapper.innerHTML = ''
    data.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('car')
        card.innerHTML = `
            <h2>About AUTO</h2>
            <img src='https://tgram.uz/uploads/channels/1/92d2fd94bb1588a20240f58e95c52b2a.jpg' alt="img">
            <h3>Model Auto: ${element.model}</h3>
            <h3>Name Auto: ${element.name}</h3>
            <h3>Year Auto: ${element.year}</h3>
            <h3>Color Auto: ${element.color}</h3>
            <h3>Price Auto: ${element.price}</h3>
            <h3>Stock Auto: ${element.stock} </h3>
            <button id='${element.id}' class="delete">Delete</button>
        `;
        CarsWrapper.appendChild(card)
    });
}else{
    CarsWrapper.innerHTML('<h1>Afsuski bu yerda hech qanday malumot yoq</h1>')
}