import conectarDB from "./db/db";
import { ProyectoModel } from "./models/project/project";
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './models/enums/enums';

const main = async () => {
    await conectarDB ();
   
    
      const proyectoCreado = await ProyectoModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/12/24'),
        presupuesto: 120000,
        lider: "Juan",
        objetivos: [
          { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.GENERAL },
          { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.ESPECIFICO },
          { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.ESPECIFICO },
        ],
      });
    
   /* const consultaProyectoConObjetivos3 = async () => {
      const proyectoreado = await ProyectoModel.find({ id: proyectoCreado._id });
      console.log('proyecto', proyectoreado);
    };*/

    //relacion debil
    // ProyectoModel.create ({
    //     nombre: 'Proyecto 3',
    //     presupuesto: 120,
    //     fechaInicio: Date.now(), //fecha actual
    //     fechaFin: new Date("2022/2/10"), //año-mes-dia
    //     lider: '619148082e64cbefb1b7d9c5' //referencia 
    // })
    // .then((u) =>{
    //     console.log('Proyecto creado', u);
    //     })   
    // .catch((e) =>{
    //     console.error('Error creando el Proyecto', e);
    //     });

    // referencia debil querys
   // const proyecto = await ProyectoModel.find({ nombre: 'Proyecto 3' }); //modelo base
     //   console.log('el proyecto es :', proyecto, proyecto[0].lider); 
    
   // const lider = await UserModel.find ({ _id: proyecto[0].lider }) //campo
     //   console.log( 'el lider del proyecto es: ', lider);

    //CREAR USUARIO
    // UserModel.create({
    //     correo:"skymotionUser4@gmail.com",
    //     identificacion:"1070222",
    //     nombre: "sky4",
    //     apellido: "motion4",
    //     rol: Enum_Rol.lider,
    // })
    // .then((u) =>{
    //      console.log('usuario creado', u);
    // })  
    // .catch((e) =>{
    //     console.error('Error creando el usuario', e);
    // });

    //leer OBTENER LOS USUARIOS
    // await UserModel.find()  //Dentro del fn find se puede filtrar y hacer la consulta
    //     .then((u) =>{
    //         console.log('usuario', u);
    //     })
    //     .catch((e) =>{
    //         console.error('error obtenido los usuarios', e)
    //     });

    //OBTENER UN SOLO USUARIO
    // await UserModel.findOne( 
    //     { identificacion: '1070123' }) //filtrar
    //     .then((u) =>{
    //         console.log('usuario encontrado', u);
    //     })
    //     .catch((e) =>{
    //         console.error(e);
    //     });
    
    //Actualizar EDITAR(parametro) UN USUARIO 
    // await UserModel.findOneAndUpdate(
    //     { correo: 'skymotion@.com' }, //filtro
    //     { //cambios
    //         nombre: 'juan',
    //         apellido: 'vaquiro',
    //         rol: Enum_Rol.lider,
    //     }
    // ).then((u) => {
    //     console.log('usuario actualizado', u);
    // }).catch((e) => {
    //     console.error('Error Actualizar', e); 
    // });

    //ELIMINAR USUARIO
    // await UserModel.findOneAndDelete( 
    //     { correo: 'skymotion@.com' }) //filtro
    //     .then((u) => {
    //         console.log('usuario eliminado', u);
    //     })
    //     .catch((e) =>{
    //         console.error('error eliminar', e);
    //     });

    
};

main ();