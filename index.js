let express = require('express');
let app = express();

//setters getters

app.set('port', process.env.PORT || 2020);

app.get('/', function(req, res){
    res.send("welcome to our web application")
});

app.listen(app.get('port'),function(){
    console.log('Server listening at localhost:' + app.get('port')) ;
})

