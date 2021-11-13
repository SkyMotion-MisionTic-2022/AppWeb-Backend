import conectarDB from "./db/db";
import { UserModel } from './models/user';
import { Enum_Rol } from "./models/enums";

const main = async () => {
    await conectarDB ();

    //CREAR USUARIO
    UserModel.create({
        correo:"skymotion99@.com",
        identificacion:"1070121011",
        nombre: "sky1",
        apellido: "motion1",
        rol: Enum_Rol.administrador,
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
};

main ();