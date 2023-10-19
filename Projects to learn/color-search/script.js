var circle = document.getElementById('circle');
var colorInformation = document.getElementById('colorInformation');

function trocarCor()
{
    var color = colorInformation.value;
    
    circle.style.backgroundColor = color;
    colorInformation.value = "";
}