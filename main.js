
const customer = document.querySelector(".customer")
const materialType = document.querySelector("#materialType")
const measures = document.querySelectorAll(".measures")
const comments = document.querySelector("#comments")
const send = document.querySelector(".send")
const result = document.querySelector("#result")


send.onclick = () => {
    let customerValue = customer.value
    let materialTypeValue = materialType.value
    let measuresValue = measures.value
    let commentsValue = comments.value

    result.textContent = "Hola"
    result.value = `${customerValue} ha pedido una caja de ${materialTypeValue} con unas dimensiones ${measuresValue}. ${commentsValue}.`


}


