module.exports = {
    getPlanes(req, res) {
        const db = req.app.get('db')
        db
            .get_planes(req, params.count)
            .then(planes => {
                console.log(planes);
                return res.status(200).json(planes);
            })
            .catch(console.log)
    }
};

//if you promise something you must .catch