const style = `<style>
* {
    margin: 0;
    padding: 0;
    border: none;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #B53471;
}

#root {
    font-family: 'Press Start 2P', cursive;
    background-color: #FFC312;
    /* vh=pega uma porcentagem da tela
    vw = viewport widthfield (WW) */
    width: 40vw;
    min-width: 550px;
    height: 65vh;
    text-align: center;
    padding-top: 4rem;
    border-radius: 80px;
}
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', style)