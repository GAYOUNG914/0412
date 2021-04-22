let outputText = '';
function getText(){
  if( outputText == '' ){
    outputText += document.getElementById('fname').value;
  }else{
    outputText += '<br>'+document.getElementById('fname').value;
  }
  document.getElementById('textarea').innerHTML = outputText;
}


console.log(document.getElementById('textarea').style);
document.getElementById('textarea').style.backgroundColor = 'blue';
/*addEventListener 사용*/
document.getElementById('btn').addEventListener('click',getText);
