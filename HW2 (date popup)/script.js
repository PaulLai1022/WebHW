var button = document.getElementsByTagName("button")[0];
var area = document.getElementsByTagName('div');
    
var closeButton = document.getElementsByClassName('close')[0];

var popup = document.getElementsByClassName('area')[0];


document. getElementsByClassName()

button.onclick = function(){
    popup.style.display = 'block'; 
    popup.innerHTML =new Date();
}

closeButton.oncluck = function(){
    popup.style.display = 'none';
}

