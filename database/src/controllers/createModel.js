const store = require("../database")
const {response}= require("../utils")

module.exports = async (req,res) => {
   const { model } = req.params;
   const data = req.body;
   const createModel = await store[model].insert(data)
    res.status(200).json(createModel)
};