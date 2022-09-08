const fox = document.querySelector('.fox')
const dog = document.querySelector('.dog')
const foxBtn = document.querySelector('.fox-btn')
const dogBtn = document.querySelector('.dog-btn')


foxBtn.addEventListener('click', function() {
    fetch('https://randomfox.ca/floof/').then(response => response.json()).then(response => {
        fox.innerHTML = `<img src='${response.image}'>`
    })
})

dogBtn.addEventListener('click', function() {
    fetch('https://random.dog/woof.json').then(response => response.json()).then(response => {
        dog.innerHTML = `<img src='${response.url}'>`
    })
})