/**
 *
 * @param inputNumber : number de depart (entier positif)
 * Vous devez dans cette fonction, entrer la logique de syracuse.
 * @return la série complète générée
 */
function syracuse(inputNumber) {

    //on met le premier nombre dans le tableau
    const monTableau = [inputNumber];

    /**
     * Ensuite, je calcule la série de Syracuse :
     * - s'il est pair = je divise le nombre par deux
     * - s'il est impair = je le multiplie par 3 et ajoute 1
     * - je continu, tant que je suis different de 1
     */
    while (inputNumber != 1) {

        /**
         * J'effectue une division entière, via le modulo 2, afin d'obtenir le reste
         * Si le reste est à 0, c'est pair, sinon, impair
         */

        if (inputNumber%2 == 0){
            //après avoir établi que le nombre est pair, je calcule le nouveau montant de la série, puis, j'ajoute le nombre dans le tableau.
            inputNumber = inputNumber/2;
            monTableau.push(inputNumber);
        }  else {
            //s'il est impair, je calcule le nouveau terme, puis, j'ajoute dans le tableau
            inputNumber = 3*inputNumber + 1;
            monTableau.push(inputNumber);
        }
    }

    //enfin, je retourne le tableau contenant la série de syracuse
    return monTableau;
}


/**
 * calculateSyracuse est la fonction lancé depuis le HTML permettant de :
 * - récuperer la valeur dans l'input "inputNumber"
 * - verifier que la donnée est correcte
 * - transmettre la donnée à syracuse, si, tel est le cas, sinon, afficher qu'on ne peux pas effectuer le calcul.
 * - écrire dans Résultat (appelé "result") du html le résultat de la serie
 */
function calculateSyracuse() {

    //recuperation du nombre présent dans le input inputNumber du html
    let inputNumber = document.getElementById("inputNumber").value;
    

    sequence = syracuse(inputNumber);
    if(!sequence){
        document.getElementById("result").innerHTML = "Pas de retour de la fonction syracuse."
    }
    else{
        document.getElementById("result").innerHTML = sequence;
    }
}


/**
 * Ne pas modifier, cela est des tests qui vont écrire dans le HTML afin de vous stipuler si la fonction syracuse est bien effectué
 *
 */
function runTests() {
    let testResults = [];

    function assertEqual(actual, expected, message) {
        if (actual === expected) {
            testResults.push("✔️ " + message);
        } else {
            testResults.push("❌ " + message + " (Expected: " + expected + ", but got: " + actual + ")");
        }
    }

    function missingReturn(sequence){
        testResults.push("❌ " + "fail to test. " + " (reason : missing return)");
    }

    // Test 1: Syracuse sequence for 5
    let seq5 = syracuse(5);
    if(!seq5) {
        missingReturn(seq5)
    }
    else {
        assertEqual(seq5.join(", "), "5, 16, 8, 4, 2, 1", "Syracuse sequence for 5 should be [5, 16, 8, 4, 2, 1]");
    }

    // Test 2: Syracuse sequence for 1
    let seq1 = syracuse(1);
    if(!seq1) {
        missingReturn(seq1)
    }
    else {
        assertEqual(seq1.join(", "), "1", "Syracuse sequence for 1 should be [1]");
    }

    document.getElementById("testResults").innerHTML = testResults.join("<br>");
}

window.onload = runTests;
