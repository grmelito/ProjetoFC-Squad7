const jwt = require('jsonwebtoken');


function authMiddleware (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({error: 'Acesso Negado!'});

    try {
        const verified = jwt.verify(token, 'Hu3Lit6NrOpl9Um');
        req.user = verified
    } catch (err) {
        res.status(400).send({error: 'Invalid Token'})
    }

}