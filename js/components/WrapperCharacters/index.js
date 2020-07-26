const pathCupcake = 'imagens/cupcake.png'
const cupcake = Character `
    width: 30%;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    ${pathCupcake}
`

const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters `
    display: flex;
    justify-content: space-around;
    ${cupcake + cupcake + cupcake}
`