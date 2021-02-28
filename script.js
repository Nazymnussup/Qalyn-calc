
var button = document.getElementById("submit");


button.addEventListener("click", calculate);


function calculate() {

    
   const startingBid = document.getElementById("bid").value; 
   const education = document.getElementById("education").value;
   const networth = document.getElementById("networth").value;
   const skills = document.getElementsByClassName("skills");
   const age = document.getElementsByName("age");
   const reputation = document.getElementsByClassName("reputation");
   const love_letter = document.getElementById("letter").value;
   
   let name = document.getElementById("name").value;
   let price = Number(startingBid);
   
   if (name && price) {
        /// start of main part

        // education, networth
        price = price * education * networth;
        
        // skills
        let skills_list = Array.from(skills)  
        let result = skills_list.reduce(
            (price, item) => { if (item.checked) {return price + Number(item.value);} else return price;}, price) 
        
        price = result;

        // age
        let age_list = Array.from(age)  
        age_list.forEach(item => {if (item.checked) { price = price * Number(item.value) } })
        
        // reputation

        
      
     
        for (let i=0; i < reputation.length; i++) {  
            reputation_coef=Number(reputation[i].value);
          
            if (reputation[i].checked)
                 { if (reputation_coef>0 && reputation_coef<1)
                        {
                            price = price * reputation_coef;
                        }
                   else {
                            price = price + reputation_coef;
                        }
                }
           };
       

           let love_letter = document.getElementById("letter").value;
  
   
           let person = {
        
            bride_name: name,
            
            bride_price: price,
            
            letter_to_bride: love_letter
            
            }

       
         document.getElementById("result").innerHTML = `${person.bride_name} <br> The Qalyn Mal is ${person.bride_price} $ <br> ${person.letter_to_bride}`;;
        

        /// end of main part
   } else if (name) {
       alert("Please fill in price!")
   } else if (price){
       alert("Please fill in name!")
   } else {
       alert("Please fill in name and price!")
   }



   

}

