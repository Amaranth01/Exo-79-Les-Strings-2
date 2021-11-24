let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

/*
Exo1
 */
let indexPomme = document.getElementById('index-pomme');
let lPomme = pomme.indexOf('pomme');
indexPomme.innerHTML = lPomme.toString();

/*
Exo 2
 */

let m = document.getElementById('last-index-m');
let lm = pomme.lastIndexOf('m');
m.innerHTML = lm.toString();

/*
Exo 3
 */

if (pomme.startsWith('Elle')) {
    console.log("Elle est belle ma pomme ! Commence par elle");
}

/*
Exo4
 */

if (pomme.endsWith('!')) {
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

/*
Exo 5
 */

let nouvellePomme = pomme.substring(18, 23);
let pPomme = document.getElementById('pomme');
pPomme.innerHTML = nouvellePomme

/*
Exo6
 */

let onLine = document.getElementById('one-line');
for (let i =0; i < pomme.length; i++) {
    onLine.innerHTML += pomme[i] + '<br>';
}
