    /**
    * Function to sing out of session
    */
    function makeUserSignOut() {
        if (firebase.auth().currentUser) {
          firebase.auth().signOut();
        }
    }
  
    /**
     * Returns username or mobile number
    */
    function getUserName() {
        var user = firebase.auth().currentUser
        if (user.displayName) {
            return user.displayName
        } else if (user.email) {
            return user.email
        }else if (user.phoneNumber) {
            return user.phoneNumber
        } else {
            return 'User'
        }
    }

    /**
     * Registers for user authentication state change
    */
    function registerUserAuthenticationStateChange() {

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // For each html file this needs to implement
              userSignIn()
            } else {
              // For each html file this needs to implement
              userSignOut()
            }
        });
    }