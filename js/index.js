// BOM - window
// DOM - document
// const title = document.querySelector('h1')
// alert('pause')
// innerHTML tem problemas de segurança
// title.textContent = 'changing'

const root = document.querySelector('#root')

function newElement(tag, content) {
    // a linha de baixo faz interpolação - usar tag de forma dinâmica
    const title = `<${tag}>${content}</${tag}>`
    // concatenar com + é muito pior que interpolar
    root.insertAdjacentHTML('beforeend', title)
}

newElement('h1', 'Eita!')
