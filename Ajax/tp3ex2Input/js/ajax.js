function modify(data){
    document.getElementById("title").innerHTML = data[0];
    document.getElementById("detail").innerHTML = " hours :" +data[1]["hours"] + "<br>" + "minutes : " + data[1]["minutes"] + "<br>" + " secondes : " + data[1]["seconds"] + "<br>";
}

function ajaxRequest(type, url,callback){


    
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);

    xhr.onload = () => {

        switch (xhr.status){
            case 200 : let newData = JSON.parse(xhr.responseText);
                        callback(newData);
                        displayClock(newData[1]); 
            case 201 : console.log(newData);
                break;
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
    };

    xhr.send();
}

setInterval(ajaxRequest, 1000, "GET","http://localhost/PHP/tp3ex2Input/php/time.php",modify);
