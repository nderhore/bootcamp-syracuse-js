# Suite de Syracuse

## Description

Ce projet a pour objectif de développer un programme en JavaScript qui calcule et affiche la suite de Syracuse pour un nombre entier donné par l'utilisateur. 

## Fonctionnalités

1. **Calcul de la suite de Syracuse** : Générer la suite de Syracuse pour un nombre entier positif donné.
3. **Interaction utilisateur** : Demander à l'utilisateur de saisir un nombre entier positif et afficher les résultats.

## Structure du projet

- `index.html` : Contient le code HTML pour l'interface utilisateur.
- `script.js` : Contient les fonctions JavaScript pour calculer la suite de Syracuse et déterminer la longueur de la plus longue série de Syracuse.
- `style.css` : Contient les styles CSS pour améliorer l'apparence de l'interface utilisateur.

## Instructions

### 1. Cloner le dépôt

```bash
git https://github.com/nderhore/bootcamp-syracuse-js.git
cd bootcamp-syracuse-js
```

### 2. Implémenter les fonctions JavaScript

Vous devez developper les fonctions suivantes, dans, `script.js` :

#### `syracuse(n)`

- **Description** : Génère la suite de Syracuse pour un nombre \( n \) donné.
  - Si le nombre \( n \) est pair : je le divise par deux
  - Si le nombre \( n \) est impair : je le multiplie par 3, et, j'ajoute 1
  - je continu tant que \( n \) est different de 1
- **Entrée** : Un entier positif \( n \).
- **Sortie** : Un tableau contenant la séquence de Syracuse.

#### `calculateSyracuse()`

- **Description** : Récupère le nombre entré par l'utilisateur, calcule la suite de Syracuse et affiche les résultats.

#### `runTests()`

- Cette fonction est déjà implémentée et n'a pas besoin d'être modifiée. Elle vérifie le bon fonctionnement des autres fonctions en utilisant des assertions.

### 3. Ouvrir le fichier `index.html`

Ouvrez le fichier `index.html` dans votre navigateur pour tester l'interface utilisateur et les fonctionnalités.


## Notes

- Assurez-vous que le fichier JavaScript `script.js` est correctement lié dans le fichier HTML.
- Les tests automatiques se déclencheront lorsque la page sera chargée et afficheront les résultats dans la section "Tests".
- Si des tests échouent, vérifiez votre implémentation et corrigez les erreurs. Les messages d'erreur fourniront des indications sur les valeurs attendues et obtenues.

## Pour aller plus loin

- Déterminer la longueur de la plus longue série de Syracuse dépassant ou étant egale à 10.
  - Par exemple, si j'ai [10,11,15,5,10,12] , la réponse est 3. J'ai depassé 3 fois 10, puis je suis tombé en dessous, et je l'ai depassé 2 fois, mais, nous prenons la série la plus longue.


Bonne chance et bon codage ! Si vous avez des questions, n'hésitez pas à les poser.
