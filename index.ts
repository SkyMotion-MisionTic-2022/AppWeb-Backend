import conectarDB from "./db/db";
import { UserModel } from './models/user';
import { Enum_Rol } from "./models/enums";
import { ProyectoModel } from "./models/project";

const main = async () => {
    await conectarDB ();

    ProyectoModel.create ({
        nombre: 'Proyecto 2',
        presupuesto: 120,
        fechaInicio: Date.now(), //fecha actual
        fechaFin: new Date("2022/2/10"), //año/mes/dia
    })
    .then((u) =>{
        console.log('Proyecto creado', u);
        })  
    .catch((e) =>{
        console.error('Error creando el Proyecto', e);
        });

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