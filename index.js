const   express = require('express'),
        mongoose = require('mongoose'),
        cookieSession =  require('cookie-session'),
        passport = require('passport'),
        bodyParser = require('body-parser');
        keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');


//sendGridKey: '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'
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 59 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT= process.env.PORT || 5000;
app.listen(PORT);