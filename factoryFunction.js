function personFactory(name) {
    return object = {
        name,
        talk() {
            return `hello I am ${name}`
        }
    }

}

const me = personFactory('Woody');
const David = personFactory('David');


console.table(object);

// ------------- using DOM ==============

function createElement(type, text, color) {
    const el = document.createElement(type)
    document.body.append(el)
    el.innerText = text
    el.style.color = color
    
    return {
        el, setText(text) {
            el.innerText = text
        },
        setColor(color) {
            el.style.color = color
        }
    }
}

const h1 = createElement('h1', 'HEY GUYS', 'red')
const p = createElement('p', 'this is a factory function using DOM', 'yellow')
