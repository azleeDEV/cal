const info = document.querySelector('.infos')

const allBtns = document.querySelectorAll('input[type=button]')

function val(resultat){
    form.fenetre.value = form.fenetre.value + resultat
}

function calcule(){
    if(form.fenetre.value == ""){
        info.innerText = `Veuillez écrire un chiffre`;
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""
            })
        })
    }else {
        // Vérification pour l'easter egg
        if (form.fenetre.value === "123*4") {
            window.location.href = "https://i.gifer.com/2c1Q.gif"; // Remplacez par l'URL de votre page Instagram
        } 
        else if (form.fenetre.value === "1+1") {
            window.location.href = "https://leclaireur.fnac.com/wp-content/uploads/2023/10/spiderman7.jpg";
        } 
        else if (form.fenetre.value === "6/2") {
            window.location.href = "https://i.gifer.com/5XQl.mp4";
        } 
        else {
            form.fenetre.value = eval(form.fenetre.value);
            info.innerText = "";
        }
    }
}

function suppr(){
    form.fenetre.value = "";
}