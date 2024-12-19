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
        if (form.fenetre.value === "555*7") {
            window.location.href = "https://i.gifer.com/2c1Q.gif"; // Remplacez par l'URL de votre page Instagram
        } else {
            form.fenetre.value = eval(form.fenetre.value);
            info.innerText = "";
        }
    }
}

function suppr(){
    form.fenetre.value = "";
}