const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('FizzBuzz Implementation. Enter your integer in the url(localhost:8080/<strong>Insert_Integer</strong>) and press enter');
});

app.get('/:number', (req, res) => {
    num = parseInt(req.params.number);
    if (num % 3 === 0 && num % 5 === 0) {
        res.send([{"in": num, result: "fizzbuzz"}]);
    }
    else if ( num % 3 === 0) {
        res.send([{"in": num, result: "fizz"}]);
    }
    else if ( num % 5 === 0) {
        res.send([{"in": num, result: "buzz"}]);
    }
    else
    res.send([{"in": num, result: req.params.number}]);
});

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});