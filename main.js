const form = document.querySelector('#novoItem')
var nome = document.querySelector('#nome')
var quantidade = document.querySelector('#quantidade')
const lista = document.querySelector('#lista')

form.addEventListener('submit', evento => {
  evento.preventDefault()
  var novoItem = document.createElement('li')
  novoItem.classList.add('item')
  novoItem.innerHTML = nome.value
  console.log(novoItem)
  lista.appendChild(novoItem)
})
