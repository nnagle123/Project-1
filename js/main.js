function verifyEmail(){
    var status = false;     
    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
         if (document.myform.email1.value.search(emailRegEx) == -1) {
              alert("Please enter a valid email address.");
         }
        
         else {
              alert("Woohoo!  Thank you for Subscribing.");
              status = true;
         }
         return status;
    }       