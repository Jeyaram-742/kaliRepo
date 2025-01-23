var myinput = document.getElementById('exampleInputPassword1');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var symbol = document.getElementById('symbol');
var length = document.getElementById('length');

myinput.onfocus = function(){
    document.getElementById('message').style.display = 'block';
    }

myinput.onblur = function(){
     document.getElementById('message').style.display = 'none';
    }
    
    myinput.onkeyup = function() {
        var LowerCaseLetters = /[a-z]/g;
        if(myinput.value.match(LowerCaseLetters)){
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        }else{
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
   

        var UpperCaseLetters = /[A-Z]/g;
        if(myinput.value.match(UpperCaseLetters)){
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        }else{
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }
    

 
        var Number = /[0-9]/g;
        if(myinput.value.match(Number)){
            number.classList.remove("invalid");
           number.classList.add("valid");
        }else{
           number.classList.remove("valid");
           number.classList.add("invalid");
        }
    

   
        var special = /[@#$&]/g;
        if(myinput.value.match(special)){
            symbol.classList.remove("invalid");
            symbol.classList.add("valid");
        }else{
            symbol.classList.remove("valid");
            symbol.classList.add("invalid");
        }

   if(myinput.value.length >= 8 && myinput.value.length <= 20){
            lenght.classList.remove("invalid");
            lenght.classList.add("valid");
        }else{
            lenght.classList.remove("valid");
            lenght.classList.add("invalid");
        }
    }
    
