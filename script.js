//Flora(Li Zifei)  Description:Fields that validate blank forms cannot be empty, and numeric fields must contain numeric values. Can open email links. It is possible to let the user fill in all fields and make sure that the user enters the appropriate values. Detect empty fields and prompt the user for a value, check for numeric fields, the input must be a numeric value.
var name=document.myform.name.value;  
var num=document.myform.num.value;  
var message=document.myform.message.value; 
if (name==null || name==""){
  alert(" All can not be empty");
  return false;
  }else{
     return true;
  }
if (num==null || num==""){
  alert(" All can not be empty");
  return false;
  }	else{
  return true;
  }
if (isNaN(num)){
  document.getElementById("numloc").innerHTML="Enter Numeric value only";
  alert(" Please enter the number");
  return false;
}
if (message==null || message==""){
  alert(" All can not be empty");
  return false;
  }		
else{
  return true;
  }
}








var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

