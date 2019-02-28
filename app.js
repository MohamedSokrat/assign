var PriortiesChecker = ['11','22','33','44','55','66','77','88','99'];

var PriortiesQ = [];
var RegularQ1 = [];
var RegularQ2 = [];

var RegularFlagQ1 = 0;
var RegularFlagQ2 = 0;

document.getElementById("Book").onclick = function() {
  var i = document.getElementById("mobile").value;
  if (document.getElementById("serviceQual").value == 1  && PriortiesChecker.includes(i) )
    PriortiesQ.push(i);
  else  {
    if(document.getElementById("serviceCounter").value == 1) RegularQ1.push(i);
    else RegularQ2.push(i);
  };
}

document.getElementById("C1pull").onclick = function() {
  if(RegularQ1.length == 0 &&  PriortiesQ.length == 0 )   document.getElementById('pulling').innerHTML = "Queues are empty  "; 
  else{
    if(RegularFlagQ1 == 2 || PriortiesQ.length == 0){
      document.getElementById('pulling').innerHTML = "Now Serving  " + RegularQ1.shift();
      RegularFlagQ1 = 0;
    } 
    else{
       document.getElementById('pulling').innerHTML = "Now Serving  " + PriortiesQ.shift();
       RegularFlagQ1 ++;
    }
  }
    
}

document.getElementById("C2pull").onclick = function() {
  if(RegularQ2.length == 0 &&  PriortiesQ.length == 0 )   document.getElementById('pulling').innerHTML = "Queues are empty  ";
  else{
     if(RegularFlagQ2 == 2 || PriortiesQ.length == 0 ){
    document.getElementById('pulling').innerHTML = "Now Serving  " + RegularQ2.shift();
    RegularFlagQ2 = 0;
  } 
  else{
     document.getElementById('pulling').innerHTML = "Now Serving  " + PriortiesQ.shift();
     RegularFlagQ2 ++;
  }
  }
 
}


document.getElementById("ShowP").onclick = function() {document.getElementById('demo').innerHTML ="Showing Priority Q:  " + PriortiesQ;}
document.getElementById("ShowR").onclick = function() {document.getElementById('demo').innerHTML ="Showing Regular Conter 1 Q:  " + RegularQ1
+ "<br>" +"Showing Regular Conter 2 Q:  " + RegularQ2 ;}
document.getElementById("Both").onclick = function() {document.getElementById('demo').innerHTML = "Showing Regular Conter 1 Q:  " + RegularQ1 +
 "<br>" + "Showing Regular Conter 2 Q:  " + RegularQ2 + "<br>" + "Showing Priority Q:  " + PriortiesQ ; } 

 document.getElementById("add").onclick = function() {
    if(document.getElementById('mobileconfig').value != "") PriortiesChecker.push(document.getElementById('mobileconfig').value) ;
  }

  document.getElementById("remove").onclick = function() {
    if(PriortiesChecker.includes(document.getElementById('mobileconfig').value)){
      var index = PriortiesChecker.indexOf(document.getElementById('mobileconfig').value);
      PriortiesChecker.splice(index, 1);
    }
  }
  document.getElementById("ShowPList").onclick = function() {
    document.getElementById('result').innerHTML = PriortiesChecker;
  }