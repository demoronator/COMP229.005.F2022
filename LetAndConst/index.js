// function iterateVar() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     console.log("Finally: " + i)
// }

// function iterateLet() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     console.log("Finally: " + i)
// }

// iterateVar()
// iterateLet()

function reinitConst() {
    const me = 1
    console.log(me)
    me = 2
    console.log(me)
}

reinitConst()
