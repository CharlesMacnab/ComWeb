

function ajaxRequest(type, url, callback){


    //var intervalID = setInterval(ajaxRequest, 1000, "GET","http://localhost/Ajax/php/timestamp.php",affichage());
    
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);

    xhr.onload = () => {
        
        console.log(xhr.responseText);
        callback(xhr);
        //callback(document.getElementById('timestamp').innerHTML = xhr.responseText);
    };

    xhr.send();
}

function affichage(test){
    
    
    var text  = document.createTextNode(test);
    document.getElementById('timestamp').appendChild(text);

}

function erreur(xhr){

    document.getElementById('errors').style.display = "flex";

    switch (xhr.status){
        case 400 : document.getElementById('errors').innerHTML = 'Requête incorrecte';
            break;
        case 401 : document.getElementById('errors').innerHTML = 'Authentifiez vous';
            break;
        case 403 : document.getElementById('errors').innerHTML = 'Accès refusé';
            break;
        case 404 : document.getElementById('errors').innerHTML = 'Page non trouvée';
            break;
        case 500 : document.getElementById('errors').innerHTML = 'Erreur interne du serveur';
            break;
        case 503 : document.getElementById('errors').innerHTML = 'Service indisponible';
            break;
    }

}

ajaxRequest("GET","http://localhost/Ajax/php/errors.php",erreur);
