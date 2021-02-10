import colors from "colors";
//import {mostrarMenu,pausa }from './helpers/mensajes.js';
import {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmarEliminacion,
  mostarListadoChechlist,
} from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";
import guardarDB from "./helpers/guardarArchivo.js";
import leerArchivo from "./helpers/leerArchivo.js";

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasBd = await leerArchivo();
  if (tareasBd) {
    //cargar tareas
    tareas.cargarTareasFromArray(tareasBd);
  }

  do {
    //imprime menu
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        //crear opcion
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);

        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        tareas.listarPendientesCompletadas();
        break;

      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
         const ids = await mostarListadoChechlist(tareas.listadoArr);
         tareas.toggleCompletadas(ids)
        // console.log({ids});
         
        break;

      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmarEliminacion("¿Estas seguro?");
          if ({ ok }) {
            tareas.borrarTarea(id);
            console.log("Tarea Borrada");
          }
        }

        break;

      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    //if(opt!=='0')
    await pausa();
  } while (opt !== "0");
};

main();
