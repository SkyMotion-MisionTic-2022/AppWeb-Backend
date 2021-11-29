const resolverAutentificación = {
    Mutation: {
        registro: async (parent, args) => {
            console.log ('Crear Usuario');
            return 'Usuario Creado';
        },
    },
};

export {resolverAutentificación};