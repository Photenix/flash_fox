import VocalToNumber from "./VocalToNumber";

/**
 * 
 * @param objText obtiene un object y lo convierte a un string
 * crea un string con los casos necesarios para hacer la busqueda en google 
 */
const Search_Result = ( objText : any ) =>{

    //final result
    let result : string = ""
    //pre result change with cicles
    let preRes : string = ""

    for (const key in objText) {
        if (Object.prototype.hasOwnProperty.call(objText, key)) {
            const parent = objText[key];
            
            let size = Object.keys(parent).length
            const realSize = size

            if( parent["VtoN"]  ) size--
            if( size === 0 ) continue
            
            preRes = secondCycle( parent, size )

            if( realSize === 1 ) result += `${preRes} `
            else result += `(${preRes}) `
        }
    }

    return result
}

const secondCycle = ( parent : any, size : number ) =>{
    let result = ""

    for (const keyChildren in parent) {
                
        if (Object.prototype.hasOwnProperty.call(parent, keyChildren)) {
            const element = parent[keyChildren];

            if( element === true ) continue

            if( parent["VtoN"]  ){
                result += VocalToNumber( element )
            }
            else{
                result += `"${element}"`
            }
            if( size > 1 ) result += " OR "
            size--
        }
    }
    return result
}


export default Search_Result