import inquirer from 'inquirer';
import colors from 'colors';

const preguntas={
    type:'list',
    name:'opcion',
    message:'¿Que desea hacer?',
    choices:[
      {
        value:'1',
        name:`${colors.red('1')}. Crear tarea`
      },
      {
        value:'2',
        name:`${colors.red('2')}. Listar tarea`
      },
      {
        value:'3',
        name:`${colors.red('3')}. Listar tareas completadas`
      },
      {
        value:'4',
        name:`${colors.red('4')}. Listar tareas pendientes`
      },
      {
        value:'5',
        name:`${colors.red('5')}. Completar tarea(s)`
      },
      {
        value:'6',
        name:`${colors.red('6')}. Borrar tarea`
      },
      {
        value:'0',
        name:`${colors.red('0')}. Salir`
      }

    ]
}

const inquirerMenu=async ()=>{

   console.clear();
    console.log('======================================'.green);
    console.log('        Seleccione una Opcion     '.red);
    console.log('======================================\n'.green);
   


  
 const {opcion}= await  inquirer.prompt([
    
    preguntas
  ]);
  
  return opcion;
}

const pausa=async ()=>{

  const preguntas=[
    {
      type:'input',
      name:'enter',
      message:`Presione  ${'Enter'.green} para continuar`
    }
  ];

 await inquirer.prompt(preguntas);


};

const leerInput= async (mensaje)=>{
  const preguntas=[
    {
      type:'input',
      name:'desc',
      message:mensaje,
      validate(value){
        if(value.length===0){
          return 'Por favor ingrese un valor';
        };
        return true;
      }

  }
];

const{desc}= await inquirer.prompt(preguntas);
return desc;

};

const listadoTareasBorrar= async(tareas=[])=>{

  const choices=tareas.map((tarea,i)=>{
    let idx=i+1
    return {
      value:tarea.id,
      name:`${colors.red(idx)}  ${tarea.desc}`,
     
    }
  });
  choices.unshift({
    value:'0',
    name:`${colors.green('0 .')} Cancelar`
  })

  const preguntas=[{

    type:"list",
    name:'id',
    message:'borrar',
    choices:choices
  }]
  const {id}= await inquirer.prompt(preguntas);
  return id;

};

const confirmarEliminacion = async(mensaje)=>{

  const preguntas=[{
    type:'confirm',
    name:'ok',
    message:mensaje
  }];

  const {ok}= await inquirer.prompt(preguntas);
  return ok;

}


const mostarListadoChechlist= async(tareas=[])=>{

  const choices=tareas.map((tarea,i)=>{
    let idx=i+1
    return {
      value:tarea.id,
      name:`${colors.red(idx)}  ${tarea.desc}`,
      checked:(tarea.completadoEn)?true :false
     
    }
  });
  
  const preguntas=[{

    type:"checkbox",
    name:'ids',
    message:'Seleciones',
    choices:choices
  }]
  const {ids}= await inquirer.prompt(preguntas);
  return ids;

};






export  {inquirerMenu,pausa,leerInput,listadoTareasBorrar,confirmarEliminacion,mostarListadoChechlist}