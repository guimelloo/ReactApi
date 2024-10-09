const apiBase = 'http://localhost:8000/api/';

const api = {

    index: async() => {
        const response = await fetch(apiBase);

        const json = await response.json();

        return json;
    },

    create:async(email, content) => {
        const formData = new FormData();

        formData.append('email', email);
        formData.append('content', content);


        await fetch(apiBase+'email', {
            method:'POST',
            body:formData
        });
    }
};

export default api