import {user} from '/.user';

export class UserList {
    users: user[];
//methode qui ajoute user
    add(u: user){
        this.users.push(u);
    }
    //methode qui supprime
    del(name: string) {
        for (let i = 0; i < this.users. length; i++ {
            if (this.users[i].name == u.name) {
                this.users.splice(i, 1);
            }
        }
    }
    //methode QUI AUTHENTIFIE

    auth(name: string, password: string): user {
        for (let u of this.users){
            if(u.name == name && u.password == password){
return u;
            }
        

    }
    return null;
}
}
let list = new UserList();
list.add(new user("toto", "toto"));
list.add(new user("titi", "titi"));
console.log(list);
list.del("toto");
console.log(list);
let u = list.auth("titi", "titi");
console.log(u)