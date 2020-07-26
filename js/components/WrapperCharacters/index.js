const pathCupcake = 'imagens/cupcake.png'
const cupcake = Character `
    width: 30%;
    ${pathCupcake}
`

const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters `
    display: flex;
    justify-content: space-evenly;
    ${cupcake + cupcake + cupcake} 
`