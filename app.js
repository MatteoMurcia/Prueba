const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req,res) =>{
    res.render('../views/front')
});

app.listen(PORT, function () { console.log(`Servidor corriendo en el puerto ${PORT}`) });