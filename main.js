
const customer = document.querySelector(".customer")
const materialType = document.querySelector("#materialType")
const measures = document.querySelectorAll(".measures")
const comments = document.querySelector("#comments")
const send = document.querySelector(".send")
const result = document.querySelector("#result")


send.onclick = () => {
    let customerValue 
    let materialTypeValue
    let measuresValue = ''
    let commentsValue 

    // if (!customerValue){
    //     alert('Introduce tu nombre')
    // }

    customer.value ? customerValue = customer.value : alert('Introduce tunombre')
    materialType.value ? materialTypeValue = materialType.value : alert('Selecciona material')
    comments.value ? commentsValue = comments.value + '.' : commentsValue = ''



    measures.forEach(e=>{
        if (e.checked){
            measuresValue += e.value
        } 
    })

if(customerValue && materialTypeValue && measuresValue) {

    result.textContent = "Hola"
    result.value = `${customerValue} ha pedido una caja de ${materialTypeValue} con unas dimensiones ${measuresValue}.` + `${commentsValue? commentsValue: ' '}`

} 

   

}


