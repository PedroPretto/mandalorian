const connection = require('../database/connection')

module.exports = {
    
    createAccount : async (id, user, email, password) => {
        return await connection('accounts').insert({
            id,
            user,
            email,
            password
        })

        
    },

    checkAccount: async (email) => {
        return await connection('accounts').select('email').where('email', email)
    },

    login: async (user, password) =>{
        return await connection('accounts').where({
            user: user,
            password: password
        }).select('id')
    }
    
}