
import fs from 'fs';

const guardarDB= async (data)=>{
    const datos=JSON.stringify(data)
    
   await fs.writeFileSync('./db/archivos.json',datos)
    
}

export default guardarDB;