let express = require('express');
const router = require('./routes/router');
const {PORT} = require('./constants/constants')
let app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cats', router);
app.listen(PORT, () => {
});