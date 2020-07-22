// Explicou Array, função e template string

// values é uma lista com 10 posições
function Title(css, ...values) {
    console.log(css)

    return ` 
        <h1 style = "${css[0]}${css[1]}">
            ${values[0]} 
            <small>${values[1]}</small>
        </h1>`
}

//nomeFuncao`String ${value}`;