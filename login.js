localStorage.setItem('loginvalid', "false"); // save state to local storage



//console.log(process.env.LOGIN_API_LINK);



const form = document.getElementById('login-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page refresh
  
  const username = document.getElementById('username').value;
 
  const password = document.getElementById('password').value;
  

console.log(apilink());
  var LoginLink= apilink();

  var userdatastoarage= {
    name: '',
    surname: '',
    username: '',
    mentor:'',
    age: '',
    phonenr: '',
    team: '',
    id: '',
    }

  $.getJSON(LoginLink, 
    function (data) {
        
        $.each(data, function (key, value) {
            

            if(value.username==username){
                if(value.password==password){
                    localStorage.setItem('loginvalid',"true"); // save state to local storage

                    userdatastoarage.username=value.username;
                    userdatastoarage.name=value.name;
                    userdatastoarage.surname=value.surname;
                    userdatastoarage.mentor=value.mentor;
                    userdatastoarage.team=value.team;
                    userdatastoarage.age=value.age;
                    userdatastoarage.phonenr=value.phonenr;
                    userdatastoarage.id=value.id;
                     

                  //  console.log(JSON.stringify(userdatastoarage));
                     //localStorage.setItem('storeuser', storeuser); // save user to local storage
                     //localStorage.storeuser = JSON.stringify(userdatastoarage);
           localStorage.setItem('storeuser',JSON.stringify(userdatastoarage)); // save token to local storage
          
           

           
   // window.location.href = '/dashboard.html?userData=' + encodedData;
         window.location.href = './dashboard.html'; // redirect to dashboard
         
                  }else{document.getElementById("errorlogshow").innerHTML="incorrect username or password !";}
        
                  

        }
        else{document.getElementById("errorlogshow").innerHTML="incorrect username or password !";}
        });
    });
});



/*
 
               
          */