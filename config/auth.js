// expose our config directly to our application using module.exports
module.exports = {
	'facebookAuth' : {
        'clientID'      : '310328942682767', // your App ID
        'clientSecret'  : '9c5dda78592ce904e07b0be00e1afe2e', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : '85N4S1MPQeVKJ2LiKhbDakIBt',
        'consumerSecret'    : 'LEhf9H2GEylY0RZ0rsUalUSOH2xlrVucxeYht2L8NPyNffeOZY',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '973690250630-ts24thipo0p1c1mppcvc96ermvaqnh65.apps.googleusercontent.com',
        'clientSecret'  : 'iACdzwolxRq5xEAgAFzRDbdw',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};