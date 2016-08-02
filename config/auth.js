module.exports = {
    'facebookAuth' : {
        'clientID'      : process.env.CLIENT_ID, // App ID
        'clientSecret'  : process.env.CLIENT_SECRET, // App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    }
};