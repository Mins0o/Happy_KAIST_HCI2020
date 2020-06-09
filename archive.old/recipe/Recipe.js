$(document).ready(function () {
    var Recipe_image = image_pairs
});

var input = "salmonteriyaki";
function loadImage() {
    var curImage = document.getElementById('image');
    for (var i = 0; i < image_pairs.length; i++) {
        console.log('input');
        if (image_pairs[i]['name'] == input) {
            curImage.src = image_pairs[i]['source'];
        }
    }
}
loadImage()

function tabClick() {
    //initialize
    var activeTab = document.getElementById('ingredients');
    activeTab.style.display = 'block';

    var iTab = document.getElementById('ing');
    iTab.classList.add('active');
    iTab.onclick = function () {
        console.log('i');
        openTabs(event, 'ingredients')      
    }
    var uTab = document.getElementById('uten');
    uTab.onclick = function () {
        openTabs(event, 'utensils')
    }
    var rTab = document.getElementById('recip');
    rTab.onclick = function () {
        openTabs(event, 'recipe')
    }
}
tabClick()

function openTabs(event, tabName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    var activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block';
    event.target.classList.add('active');
}