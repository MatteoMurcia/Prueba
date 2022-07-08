const express = require('express');

const app = express();
const PORT = process.eventNames.PORT || 3000;

app.get('/', (req,res) =>{
    res.send("Welcome");
});

app.listen(PORT, function () { console.log(`Servidor corriendo en el puerto ${PORT}`) });