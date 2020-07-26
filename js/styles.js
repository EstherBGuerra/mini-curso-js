const style = `<style>

:root {
    --line-height: 10px;
    --happy-color: #5758BB;
}

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
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border-radius: 80px;
    font-family: 'Lobster', cursive;
    text-align: center;
    width: 40vw;
    min-width: 550px;
    height: 65vh;
    padding-top: 2rem;
    padding-bottom: 3.7rem;
    background-color: #FFC312;
}
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', style)