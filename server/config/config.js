//=================== 
// Puerto
//===================
process.env.PORT = process.env.PORT || 3000;

//=================== 
// Entorno
//===================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================== 
// Base de Datos
//===================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe_user:s3DraQfsCQnX75P@ds217349.mlab.com:17349/cafe';
}

process.env.URL_DB = urlDB;