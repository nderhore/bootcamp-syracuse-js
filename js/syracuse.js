/**
 *
 * @param inputNumber : number de depart
 * Vous devez dans cette fonction, entrer la logique de syracuse.
 * @return la série complète générée
 */
function syracuse(inputNumber) {
    
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
