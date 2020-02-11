

// function recup(){
//     var nom = document.getElementsByName("firstname").value;
//     var prenom = document.getElementsByName("lastname").value;
//     var id_medecin = document.getElementsByName("id_medecin").value;
//     var email = document.getElementsByName("email").value;
//     var telephone = document.getElementsByName("tel").value;
//     var ordonnance = document.getElementsByName("ordonnance").value;
//     localStorage.setItem("nom",firsname);
//     localStorage.setItem("prenom",lastname);
//     localStorage.setItem("email",id_medecin);
//     localStorage.setItem("tel",email);
//     localStorage.setItem("numeroid",telephone);
//     localStorage.setItem("ordonnance",ordonnance);

//     document.location.href("ordonnance.html");
// }

function recup_value() {
    var nom = sessionStorage.getItem("nom");
    var prenom = sessionStorage.getItem("prenom");
    var rpps = sessionStorage.getItem("rpps");
    var email = sessionStorage.getItem("email");
    var tel = sessionStorage.getItem("tel");
    var ordo = sessionStorage.getItem("ordo");

    document.getElementById("nom").innerHTML = sessionStorage.getItem("nom");
    document.getElementById("prenom").innerHTML = sessionStorage.getItem("prenom");
    document.getElementById("rpps").innerHTML = sessionStorage.getItem("rpps");
    document.getElementById("email").innerHTML = sessionStorage.getItem("email");
    document.getElementById("tel").innerHTML = sessionStorage.getItem("tel");
    document.getElementById("ordo").innerHTML = sessionStorage.getItem("ordo");
}

function affiche_value(){
    document.getElementById("resultnom").innerHTML=sessionStorage.getItem("nom");
    document.getElementById("resultprenom").innerHTML=sessionStorage.getItem("prenom");
    document.getElementById("resultrpps").innerHTML=sessionStorage.getItem("rpps");
    document.getElementById("resultemail").innerHTML=sessionStorage.getItem("email");
    document.getElementById("resulttel").innerHTML=sessionStorage.getItem("tel");
    document.getElementById("resultordo").innerHTML=sessionStorage.getItem("ordo");
}
