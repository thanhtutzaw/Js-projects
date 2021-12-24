//get element by id and class
    // const grandparent = document.getElementById('grandid')
    // const parents = Array.from(document.getElementsByClassName('parent'))

    // parents.forEach(changeColor)

    // function changeColor(element){
    //     element.style.backgroundColor='#333'
    // }
    
//document.querySelector

        // const grandparent = document.querySelector(".grandparent")
        // changeColor(grandparent)

        // const parent = document.querySelector(".parent")
        // changeColor(parent)

//document.querySelector all 

        // const parents = document.querySelectorAll(".parent")

        // parents.forEach(changeColor)


// select children
        // const grandparent = document.querySelector("#grandid")
        // const parent = Array.from(grandparent.children)
        // const parentOne = parent[0]
        // const children = parentOne.children

        // changeColor(children[0])

        //  function changeColor(element){
        //         element.style.backgroundColor='#333'
        //     }

//select descendants
        // const grandparent = document.querySelector("#grandid")
        //  const child = grandparent.querySelectorAll(".child")
        //  child.forEach(changeColor)
        // function changeColor(element){
        //         element.style.backgroundColor='#333'
        //     }

// select parents
    // const childOne = document.querySelector("#circle")
    // const parent = childOne.parentElement
    // const grandparent = parent.parentElement
    // changeColor(grandparent)
    // function changeColor(element){
    //             element.style.backgroundColor='#333'
    //         }

// selecting ancestors
    // const childOne = document.querySelector("#circle")
    // const grandparent = childOne.closest(".grandparent")
    // changeColor(grandparent)
    // function changeColor(element){
    //             element.style.backgroundColor='#333'
    //         }

// next and previous sibling
    const childOne = document.querySelector("#circle")
    const childTwo = childOne.nextElementSibling //nextElementSibling
    changeColor(childTwo.previousElementSibling) //previousElementSibling
    function changeColor(element){
                element.style.backgroundColor='#333'
            }
