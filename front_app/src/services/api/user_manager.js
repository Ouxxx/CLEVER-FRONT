const users = [
    {
        id : 'AA001AA',
        password : '$pwd01',
        email : 'prenom01@yahoo.fr',
        phone : '0600000001'
    },{
        id : 'AA002AA',
        email : 'prenom02@gmail.com',
        password : 'pwd02$',
        phone : '0600000002'
    }
];
    
var prefixId = 'AA';
var suffixId = 'AA';
var numId = 2;
    
export default {
    connectUser (email, pwd){
        var found = users.find(user => user.email === email && user.password === pwd) || null;
        if(found){
            this.$store.commit('loadUser', { 
                id: found.id,
                email: found.email,
                password: found.password,
                phone: found.phone
            });
        return true;
        }
        return false;
    },
    
    createUser (email, phone, pwd){
        /* verifie que tous les elements sont renseignés */
        if(!email || !phone || !pwd){
            return false;
        }
        /* TODO : generation d'un nouvel Id */
        numId++;
        var newId = prefixId + numId + suffixId;
        /* creation du nouveau user */
        users.push({
            id : newId,
            password : pwd,
            email : email,
            phone : phone
        });
        return this.connectUser (email, pwd);
    }
}
    