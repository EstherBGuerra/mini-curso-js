const Action = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Item = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const action = Action `
    list-style: none;
    position: absolute;
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    border-radius: var(--round-border);
    background-color: var(--action-color);
`

const item = Item `
    list-style: none;
    height: calc(var(--line-height) * 4);
    width: calc(var(--line-height) * 4);
    background-color: var(--happy-color);
    border-radius: var(--round-border);
`

const slide = Slide `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 70%;
    height: var(--line-height);
    margin-top: auto;
    background-color: var(--happy-color);
    ${item + item + item + action}
`

//const item1 = Item``