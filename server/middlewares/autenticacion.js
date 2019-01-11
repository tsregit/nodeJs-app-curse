const jwt = require('jsonwebtoken');
// ==============
// Verificar TOKEN
// ==============

let verificarToken = (req, res, next) => {
    let token = req.get('x-auth-token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }
        // el decoded es el paylod
        req.usuario = decoded.usuario;
        next();
    });
};

// ==============
// Verificar ADMIN ROLE
// ==============

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};

module.exports = {
    verificarToken,
    verificaAdmin_Role
};