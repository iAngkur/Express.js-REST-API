const routes = (app) => {
    app.route('/contact')
        .get((req, res) => {
            res.send('GET requst successful');
        })

        .post((req, res) => {
            res.send('POST request successful');
        })


    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send('PUT requst successful');
        })

        .delete((req, res) => {
            res.send('DELETE request successful');
        })
}

exp