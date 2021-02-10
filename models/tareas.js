
import Tarea from './tarea.js';
import colors from 'colors';


class Tareas{
    _listado={};
    get listadoArr(){
        let listado=[];
        Object.keys(this._listado).forEach(key=>{
            const tarea=this._listado[key]
           listado=[...listado,tarea];
           
           
        })
    
        return listado;

    }

    constructor(){
        this._listado={};
    };
    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id];

        }

    }
    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea=>{
            this._listado[tarea.id]=tarea;
        })

    }

    crearTarea(desc=''){
        const tarea=new Tarea(desc);
        this._listado[tarea.id]=tarea;

    }
    listadoCompleto(){
        console.log();
        
        this.listadoArr.forEach((tarea,i)=>{
            const ix=i+1
            const {desc,completadoEn}=tarea

            const estado=(completadoEn)?'Completado'.green:'Pendiente'.red;

            console.log(`${colors.red(ix)}. ${desc} :: ${estado}`);
            
            
        })
    };
    listarPendientesCompletadas(completadas=true){
        let contador=0;

        this.listadoArr.forEach((tarea)=>{
            
            const {desc,completadoEn}=tarea

            const estado=(completadoEn)?'Completado'.green:'Pendiente'.red;

            if(completadoEn){
                if(completadas){
                    //mostrar completadas
                contador+=1;
                console.log(`${colors.red(contador.toString())}. ${desc} :: ${estado}`);

                }
                

            }else{
                if(!completadas){
                contador+=1; 
                    //mostrar pendientes
                console.log(`${colors.red(contador)}. ${desc} :: ${estado}`);

                }
                
            }

            
            
            
        })

    };

    toggleCompletadas (ids=[]) {
        
        for(let id of ids){

            const tarea=this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn=new Date().toISOString();
            }
            
        }

       for(let tarea of this.listadoArr){
           if(!ids.includes(tarea.id)){
              this._listado[tarea.id].completadoEn=null;
           }
       }
        

    
    }


}

export default Tareas;