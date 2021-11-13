import conectarDB from "./db/db";
import { UserModel } from './models/user';
import { Enum_Rol } from "./models/enums";

const main = async () => {
    await conectarDB ();

    //CREAR USUARIO
    UserModel.create({
        correo:"skymotionUser2@.com",
        identificacion:"1070123",
        nombre: "sky2",
        apellido: "motion2",
        rol: Enum_Rol.estudiante,
    })
    .then((u) =>{
         console.log('usuario creado', u);
    })  
    .catch((e) =>{
        console.error('Error creando el usuario', e);
    });

    //OBTENER LOS USUARIOS
    // await UserModel.find()  //Dentro del fn find se puede filtrar y hacer la consulta
    //     .then((u) =>{
    //         console.log('usuario', u);
    //     })
    //     .catch((e) =>{
    //         console.error('error obtenido los usuarios', e)
    //     });

    //EDITAR(parametro) UN USUARIO 
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