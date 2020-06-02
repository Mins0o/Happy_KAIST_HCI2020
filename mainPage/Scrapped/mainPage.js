var userName="Minsoo Kang";
var headerBar = document.getElementById("headerBar");
var sticky = headerBar.offsetTop;
window.onscroll = function() {stickyScrolling()};


$( document ).ready(function() {
	document.getElementById("userName").innerHTML="Hi " + userName;
});

function displayItems(){
	
}

function stickyScrolling() {
  if (window.pageYOffset >= sticky) {
    headerBar.classList.add("sticky")
  } else {
    headerBar.classList.remove("sticky");
  }
}