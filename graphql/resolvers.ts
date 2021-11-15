const resolvers = {

    Query:{
        Usuarios : async (parent, args) => {
            const usuarios =[
                {
                    nombre: 'jose'
                },
                {
                    nombre: 'martín'
                },
            ];
            
            return usuarios
        },
        
    }

}

export { resolvers };