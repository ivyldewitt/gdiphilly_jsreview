/*Add your own code here!*/

var imgKitten = document.getElementById('kitten');
imgKitten.setAttribute('height', '300');
imgKitten.setAttribute('width', '400');
imgKitten.style.border = '5px solid rgba(22, 160, 133,1.0)';


var testHeader = document.querySelector('#header');
testHeader.style.backgroundColor = 'rgba(22, 160, 133,1.0)';

var divPara = document.getElementsByTagName('div p');
divPara.style.color = 'rgba(44, 62, 80,1.0)';


var pageDiv = document.getElementById('main');
var newPara = document.createElement('p');
var paraText = document.createTextNode(`JavaScript is great, but Go is better ;P`);
newPara.appendChild(paraText);
pageDiv.appendChild(newPara);
