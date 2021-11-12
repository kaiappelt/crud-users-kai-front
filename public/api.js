const api = axios.create({
    baseURL: "https://crud-users-kai.herokuapp.com"
});

api.get("/")
    .then(response => {
        let res = response.data;

        for(let i = 0; i < res.length; i++) {
            document.querySelector('#lista')
            .innerHTML += `<li>Nome: ${res[i].name} - CPF: ${res[i].cpf}</li>`
        }
    })
    .catch(error => {
        console.log(error)
    })