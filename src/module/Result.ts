import { objText } from "../components/PHSearch"
import { handleAddSite } from "./AdvancedOptions"
import Search_Result from "./Search_Result"
import $ from 'jquery'

const writeResult = () : void =>{
  const x = Search_Result(objText)
  sessionStorage.setItem( "result", x )
  $("#result").text(x)
  handleAddSite()
}

const reWriteResult = () :void =>{
  const result = $("#result").text()
}

export { writeResult }