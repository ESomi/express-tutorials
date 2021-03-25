var express = require('express'); // express 불러옴
var app = express(); //express 생성하여 app 변수에 담음
var user = require('./routes/user');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// express 코드 작성

// var myLogger = function(req, res, next) {
//     console.log(req.url);
//     next();
// };

// app.use(myLogger)
app.use(morgan('dev'));
/* dev option
:method :url :status :response-time ms - :res[content-length]
ex) GET   /   304     11.676 ms - -
 */
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.use('/user',user)

// 서버를 3000 포트로 열고, 콜백함수 실행
app.listen(3000, function() {
    console.log('Example App is listening on port 3000');
});
