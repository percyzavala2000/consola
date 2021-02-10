import colors  from 'colors';
import { resolve } from 'path';
import readline from 'readline';

const mostrarMenu=()=>{

    return new Promise(resolve=>{

        console.clear();
        console.log('======================================'.green);
        console.log('        Seleccione una Opcion     '.red)
        console.log('======================================\n'.green);
        console.log(`${colors.red(1.)} Crear tarea`);
        console.log(`${colors.red(2.)} Listar tareas`);
        console.log(`${colors.red(3.)} Listar tareas completes`);
        console.log(`${colors.red(4.)} Listar tareas pendientes`);
        console.log(`${colors.red(5.)} Completar tarea(s)`);
        console.log(`${colors.red(6.)} Borrar tarea`);
        console.log(`${colors.red(0.)} Salir \n`);
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
    
          rl.question( `${'Selecione una opcion:'.bgBlue} `, (opcion) => {
              resolve(opcion);  
          
              
            rl.close();
          });

    })

   
}

const pausa=()=>{
    return new Promise(resolve=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
    
         rl.question( `\nPresione ${'ENTER'.green} para continuar\n`, (opcion) => {
            rl.close();
            resolve();
          });



    })
    

}

export  {mostrarMenu,pausa};