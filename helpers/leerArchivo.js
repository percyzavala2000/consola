import fs from 'fs';
const leerArchivo= async()=>{
    if(!fs.existsSync('./db/archivos.json')){
        null
    }
    const info=await fs.readFileSync('./db/archivos.json',{encoding:'utf-8'});
    const datos=JSON.parse(info)
    
    return datos;
    



}
 export default leerArchivo;