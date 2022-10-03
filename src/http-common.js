//--- Initialisation axios avec l'URL de base HTTP et les en-têtes ---//

import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-type": "application/json"
    }
});