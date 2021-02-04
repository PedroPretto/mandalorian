const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {
    async create(req, res){
        const {user, email, password} = req.body
        console.log(req.body)
        const id = crypto.randomBytes(4).toString("HEX");
        const exist = await connection('accounts').select().where('email', email)
        console.log(exist)
        if(!exist){
            await connection('accounts').insert({
                id,
                user,
                email,
                password
            })
    
            return res.json({id})
        }

        return res.json({error: 'Email already in use!'})
        
    },

    async login(req, res){
        console.log(req.body)
        const id = await connection('accounts').where({
            user: req.body.user,
            password: req.body.password
        }).select('id')

        return res.json({id})
    },
}