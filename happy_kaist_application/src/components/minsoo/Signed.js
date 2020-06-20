var signedIn =0;
var signedUp ="/login";
//mainpage

export function set(v){
	signedIn=v;
}
export function get(){
	return signedIn;
}
export function uget(){//u for signed UP
	return signedUp;
}
export function uset(v){
	signedUp=v;
}