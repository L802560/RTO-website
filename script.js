//Flora(Li Zifei)  Description:Fields that validate blank forms cannot be empty, and numeric fields must contain numeric values. Can open email links. It is possible to let the user fill in all fields and make sure that the user enters the appropriate values. Detect empty fields and prompt the user for a value, check for numeric fields, the input must be a numeric value.
function validateForm(){
var name=document.myform.name.value;  
var num=document.myform.num.value;  
var message=document.myform.message.value; 
if (name==""){
  alert(" All can not be empty");
  return false;
  }else{
     return true;
  }
if (num==""){
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
if (message==""){
  alert(" All can not be empty");
  return false;
  }		
else{
  return true;
  }
}

//Flora(Li Zifei) Description:Enter a text box value that directs the user to the course page if "Student", or the home page if "Parent".
function myFunction2() {
    var x;
    x = document.getElementById("myText").value;

    if (x=="parent") {
        window.location.replace("https://l802560.github.io/RTO-website/")
    } else if (x=="student"){
       window.location.replace("https://l802560.github.io/RTO-website/course.html")
    }
  else if (x==""){
       alert("Please enter student or parent!")
    }else if(x !="student"){
    alert("Please enter student or parent!")
    } else if(x !="parent"){
     alert("Please enter student or parent!")
    }
}

function myFunction3() {
  location.replace("https://l802560.github.io/student-parent/")
}

//Flora slideshow.
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}




