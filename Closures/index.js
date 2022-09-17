function parent() {
    const message = 'Hello World'

    function child() {
        alert(message)
    }

    console.log('It is here')
    child()
}

const childFN = parent
childFN()
