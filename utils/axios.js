const axios = require('axios').default;

function requestGet(url, onResult, onError, onFinish, debug = false) {
    axios.get(url)
        .then(response => response.data)
        .then(response => {
            if (debug) {
                console.log({ response });
            }
            // handle success
            onResult(response)
        })
        .catch(error => {
            if (debug) {
                console.log({ error });
            }
            // handle error
            onError(error)
        })
        .then(() => {
            // always executed
            onFinish()
        });
}

module.exports = {
    requestGet,
}