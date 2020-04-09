
export default {

    /* Renvoie true si la chaine correspond a un numero francais, false sinon */
    testPhone (phone) {  
        var regexphone = /^(?:\d{2}|\+\d{3})\d{8}$/;
        return regexphone.test(phone)
    },

    /* Renvoie true si la chaine correspond a une adresse mail, false sinon */
    testEmail (email) {
        var regexemail =/^(\w|-|\.)+@(\w|-)+\.(\w|-)+$/;
        return regexemail.test(email)
    },

    /* Renvoie true si la chaine correspond a un mot de passe, false sinon */
    testPassword (pwd) {
        // TODO : creer une regex logique pour un password
        var regexpwd = /^\D+$/
        return regexpwd.test(pwd)
    },

    /* Renvoie true si la chaine correspond a une date de naissance, false sinon */
    testDate (d) {
        var regexdate = /^\d\d?:\d\d?:\d{4}$/
        if( regexdate.test(d) ){
            if( !d.startsWith('31:2') &&
                !d.startsWith('31:4') &&
                !d.startsWith('31:6') &&
                !d.startsWith('31:9') &&
                !d.startsWith('31:11') ){
                    return true
                }
        }
        return false
    },

    /* Renvoie true si la chaine correspond a un code postal, false sinon */
    testZip (zip) {
        var regexzip =/^\d+$/;
        return regexzip.test(zip)
    },

    /* Renvoie true si la chaine correspond a un code postal, false sinon */
    testCode (code) {
        var regexcode =/^(email|phone)Code\d+$/;
        return regexcode.test(code)
    }
}

