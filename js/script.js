const viaCep = fetch('https://viacep.com.br/ws/01000/json/')
    .then(response => response.json())
    .then(r => {

        if (r.error()) {
            throw Error('CEP não existe')
        } else
            console.log(r)
    }).catch(e => {
        console.log(e)
    })

