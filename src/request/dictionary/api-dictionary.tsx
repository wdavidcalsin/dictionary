const API_BASE_URL = 'https://www.wordreference.com/definicion/';

const apiDictionary = {
    async get(urlContent: string) {
        try {
            const res = await fetch(`${API_BASE_URL}${urlContent}`);
            return res.text();
        } catch (err) {
            console.log('The petition failed ', err);
        }
    },
};

export default apiDictionary;
