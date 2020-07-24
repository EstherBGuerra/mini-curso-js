// Explicou Array, função e template string

// values é uma lista com 10 posições
function Title(css, ...values) {
    return ` 
        <h1 style = "${css}">
            ${values[0]}
        </h1>`
}

//nomeFuncao`String ${value}`;