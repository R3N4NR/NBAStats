import axios from "axios";

export const loadData = async (endpoint) => {


    const options = {
        method: "GET",
        url: `https://v2.nba.api-sports.io${endpoint}`,
        headers: {
            "X-RapidAPI-Key": "bfbb0d0938f82376449382812ca2e42a",
            "X-RapidAPI-Host": "v2.nba.api-sports.io",
        },
    };

    try {
        const response = await axios.request(options);
        console.log("DATA", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};