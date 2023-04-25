function formSubmit(){
    var answer = confirm("Thank you for signing up for the Haribon Foundation! Would you like to go to the main site?");
    if(answer == true){
        window.location.href = "https://haribon.org.ph";
    }
    else{
        console.log("User cancelled redirection.")
    }
}