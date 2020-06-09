var signedIn =0;
var signedUp ="/login";

export function set(v){
	signedIn=v;
}
export function get(){
	return signedIn;
}
export function uget(){
	return signedUp;
}
export function uset(v){
	signedUp=v;
}