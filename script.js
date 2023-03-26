const touches = [...document.querySelectorAll('button')]
const listeKeycode = touches.map(touche => touche.dataset.key)
const ecran = document.getElementById('screen')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString()
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            case '82':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            case '8':
                ecran.textContent = ecran.textContent.substring(0, ecran.textContent.length - 1);
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) =>{
    alert('Une erreur est sruvenue dans votre calcul : ' + e.message)
})