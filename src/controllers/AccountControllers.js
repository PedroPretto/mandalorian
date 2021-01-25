const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {
    async create(req, res){
        const {user, email, password} = req.body

        const id = crypto.randomBytes(4).toString("HEX");

        await connection('accounts').insert({
            id,
            user,
            email,
            password
        })

        return res.json({id})
    },

    async list(req, res){
        const accounts = await connection('accounts').select('*')

        return res.json({accounts})
    },
}