import $ from 'jquery'

const handleAddSite = () : void => {
    const getResult : string = sessionStorage.getItem("result") || ""
    if( $("#web_p").val() != "" ){
        let newResult : string = `${getResult} site:${$("#web_p").val()}`
        $("#result").text( newResult )
    }
    else{
        $("#result").text( getResult )
    }
}

/*
const addAdvaced = () =>{
    return NaN
}
*/

export { handleAddSite }