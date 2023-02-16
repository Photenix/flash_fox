import './style.css'
import addSearch from './components/PHSearch'

import $ from 'jquery'
import { handleAddSite } from './module/AdvancedOptions'


//VocalToNumber("Hola", { "O": 0, "A" : 4 } )

/*
let objVtoN : any = {
  
}
*/

addSearch()
$("#positive_parameter").on("click", addSearch)

const copyResult = () => navigator.clipboard.writeText($("#result").text())
$("#result").on("click", copyResult )

$("#web_p").on("input", handleAddSite )
