const services = require('../services/loginServices')

module.exports = {
    async login(req, res){
        const {user, password} = req.body
        const id = await services.login(user, password)
        return res.json({id})
    },

    async create(req, res){
        const {user, email, password} = req.body
        const id = await services.create(user, email, password)
        return res.json({id})
    }
}