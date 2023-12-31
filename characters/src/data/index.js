const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Character");
        return response.data;
    },
    getById: async (id) => {
        const response = await axios.get(`http://database:8004/Character/${id}`);
        return response.data;
    },
    create: async (data) => {
        const response = await axios.post("http://database:8004/Character", data);
        return response.data;
    },
    delete: async (id) => {
        const response = await axios.delete(`http://database:8004/Character/${id}`);
        return response.data;
    },
};