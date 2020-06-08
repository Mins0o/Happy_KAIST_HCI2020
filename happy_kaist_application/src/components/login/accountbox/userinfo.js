var userinfo = {
    "username": 'Micky',
    "userEmail": '',
    "userPassword":''
}

export function setUserName(name){
    userinfo.username = name;
}

export function setUserEmail(email){
    userinfo.userEmail = email;
}

export function setUserPassword(passoword){
    userinfo.userPassword = passoword;
}

export function getUserName(){
    return userinfo.username;
}