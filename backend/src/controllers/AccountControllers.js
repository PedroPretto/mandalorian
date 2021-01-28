const connection = require('../database/connection')
const crypto = require('crypto');
const { exists } = require('fs');

module.exports = {
    async create(req, res){
        const {user, email, password} = req.body
        const id = crypto.randomBytes(4).toString("HEX");
        const exist = await connection('accounts').select().where('email', email)

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
        const id = await connection('accounts').where({
            user: req.body.user,
            password: req.body.password
        }).select('id')

        return res.json(id)
    },
}