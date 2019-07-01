const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
   done(null, user._id);
});

passport.deserializeUser((id, done) => {
   User.findById(id)
       .then(user => {
           done(null, user);
       })
});

passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id})
            .then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new User({googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
    })
);


passport.use(new LinkedInStrategy({
    clientID: keys.linkedinClientID,
    clientSecret: keys.linkedinClientSecret,
    callbackURL: "http://localhost:5000/auth/linkedin/callback/",
    scope: ['r_emailaddress', 'r_liteprofile'],
}, function(accessToken, refreshToken, profile, done) {
    User.findOne({googleId: profile.id})
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({googleId: profile.id })
                    .save()
                    .then(user => done(null, user));
            }
        });
}));