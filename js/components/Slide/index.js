const Item = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const item = Item `
    list-style: none;
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--happy-color);
    border-radius: 50%;
`

const slideContent = 'Vaaaii!!'
const slide = Slide `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: var(--line-height);
    margin-top: auto;
    background-color: var(--happy-color);
    ${item + item + item}
`

//const item1 = Item``