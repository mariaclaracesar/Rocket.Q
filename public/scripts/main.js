import Modal from './modal.js'
const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

function handleClick(event, check = true) {
  event.preventDefault()
  // variavel de texto, refatoração
  const text = check ? 'Marcar como lida' : 'Excluir'

  // Montando a URL para onde o formulario vai
  const questionId = event.target.dataset.id
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  // trocando o texto do html para seu texto certo
  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = ` Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}!`

  // removendo class red para mudar a cor do botão
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  // função para abrir modal
  modal.open()
}

/////// MARCAR COMO LIDO //////
// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a "escuta"
  button.addEventListener('click', handleClick)
})

/////// DELETE ////////
/// Quando o botão delete for clicado ele abre a modal //
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})
