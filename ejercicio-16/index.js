const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo=> {
    parrafo.addEventListener("dragstart", event=>{
        //console.log("agarrando " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", ()=>{
        //console.log("soltando " + parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        //console.log("over")
    })

    seccion.addEventListener("drop",event=>{
        //console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id: ", id_parrafo)
        const parrafoDrag = document.getElementById(id_parrafo)
        seccion.appendChild(parrafoDrag)

    })
})