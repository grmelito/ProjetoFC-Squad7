const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({error: 'Acesso Negado!'});

    try {
        const verified = jwt.verify(token, 'Hu3Lit6NrOpl9Um', function(err, decodedToken){
        if(err) {res.status(400)}
        else {
            req._id = decodedToken.IdUsuario;
            req.user = verified
            next();
        }   
        })
    } catch (err) {
        res.status(400).send({error: 'Token Inválido!'})
    }
}