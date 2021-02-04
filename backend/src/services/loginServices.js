const connection = require('../database/connection')
const crypto = require('crypto');
const db = require('../models/accountDataAccess');

module.exports = {

    async create(user, email, password){
        const id = crypto.randomBytes(4).toString("HEX");
        const exist = await db.checkAccount(email)
        if(!exist[0]){
            await db.createAccount(id, user,email,password)
            return id
        }

        return {error: 'Email already in use!'}
        
    },

    async login(user, password){
        const id = await db.login(user,password)
        return id
    },
}