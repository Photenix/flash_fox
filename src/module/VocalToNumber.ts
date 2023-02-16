/**
 * Change the vocal tu number
 * @param world 
 * @param kwargs O = 0, A = 4, E = 3, I = 1
 * @returns 
 */

const NEUTRAL = {
    "O" : 0,
    "A" : 4,
    "E" : 3,
    "I" : 1
}

const VocalToNumber = ( world : string, kwargs : any = NEUTRAL ) =>{
    /* 
        crea un ciclo que repite los objetos
        tienes una lista que cada ciclo agrega un comando nuevo
        ejemplo:
        HOLA
        H0LA
        HOL4
        H0L4
        Asi dando todas las posibilidades
    */
    
    world = `"${world.toUpperCase()}"`
    
    let resultWorld : string = world
    let allCases : string = world

    for (const key in kwargs) {
        if (Object.prototype.hasOwnProperty.call(kwargs, key)) {
            const element = kwargs[key];
            //iterator world
            let iWorld : string = world
            // change number
            let chNum : number = element
            
            iWorld = iWorld.replace(key, chNum.toString())
            allCases = allCases.replace(key, chNum.toString())
            
            if( notNullNumber( chNum, iWorld ) != null ){
                resultWorld += ` OR ${iWorld}`
            }
        }
    }
    
    resultWorld += ` OR ${allCases}`

    return resultWorld
}

const notNullNumber = ( number : number, world : string ) =>{
    const RE = RegExp( number.toString(), 'g')
    return RE.exec(world)
}

export default VocalToNumber