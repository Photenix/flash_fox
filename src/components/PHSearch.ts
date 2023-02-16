import $ from 'jquery'
import { writeResult } from "../module/Result"

/*
  la data se recoge como object, se dibuja un "()" para cada una de las convenciones, y se encierra las palabras con un "palabra", cuando se agrega otra palabra que no esta vacia se agrega un OR entre ellas
*/

/*
  objetos de objetos
  a cada div se le da un objeto
  cada input es un objeto del objeto
  como se asignen como string aun si se borra uno de ellos mantendra aun asi el orden, inpidiendo perdida de informacion por no encontrar un id
*/

let findDiv : number = 1

let objText : any = {
}

// target n = shot number id
const placeHolderSearch = ( num:number ) => { 
  findDiv++
  const id : string = `word-${num}`
  objText[id] = {}
  
  return `<div class="word-container">
      <div id="word-${num}">

      </div>
      <div class="word-button">
        <input type="button" class="new_input" value="+" n ="${num}">
        <input type="button" class="delete_all_parameter" value="delete" n ="${num}">
        <input type="checkbox" name="" class="VtoN" n ="${num}">
      </div>
    </div>`
}

const handleOnInput  = (e : any )  => {
  const parent = e.target.parentElement.id
  if(e.target.value == ''){
    delete objText[parent][e.target.id]
  }
  else{
    objText[parent][e.target.id] = e.target.value
  }
  
  writeResult()
}

const handleChecked = (e : any )  => {
  const Target : any = e.target
  const ID : any = Target.attributes["n"].nodeValue
  const NODE : HTMLElement = $(`#word-${ID}`)[0]

  if( Target.checked ){
    objText[NODE.id]["VtoN"] = true
  }
  else{
    delete objText[NODE.id]["VtoN"]
  }
}

const handleOnClick = ( e : any ) => {
  const ID : any = e.target.attributes["n"].nodeValue
  const NODE : HTMLElement = $(`#word-${ID}`)[0]
  const totalChild :number = NODE.children.length
  
  if( totalChild > 4 ) return null

  $(newInputTXT(totalChild)).appendTo(NODE)

  return null
}

const handleDelete = (e:any) => {
  const ID : any = e.target.attributes["n"].nodeValue
  const grandParent  = e.target.parentElement.parentElement
  delete objText[`word-${ID}`]
  grandParent.remove()
  writeResult()
}

const newInputTXT = ( id:number ) => {
  const input = document.createElement("input");
  input.type = "text"
  input.placeholder = "coloque palabra exacta"
  input.oninput = handleOnInput
  input.id = `${id}`
  return input
}

const addSearch  = () => {
  $(placeHolderSearch( findDiv )).appendTo("#word")
  $(newInputTXT(0)).appendTo(`#word-${findDiv - 1 }`)
  const x = $(`#word-${findDiv - 1 }`).parent()[0]
  
  x.querySelector(".new_input")?.addEventListener("click", handleOnClick)
  x.querySelector(".delete_all_parameter")?.
    addEventListener("click", handleDelete )
  x.querySelector(".VtoN")?.
    addEventListener("click", handleChecked )
}

export default addSearch
export { objText }