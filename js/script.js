// RACCOLTA DATI
// Array con lista della spesa 
const shoppingList = ["Pane", "Latte", "Nutella", "Gelato", "Biscotti", "Marmellata"];
console.log(shoppingList);

// Variabili globali
let i = 0;
let shoppingString = "";

// LOGICA DEL PROGRAMMA

// Ciclo while che duri **finchè** l'indice è inferiore alla lunghezza dell'array - che compia dunque tante iterazioni quanti sono gli elementi contenuti dentro l'array. 

while (i < shoppingList.length) {
    // Creare una variabile per ogni elemento corrente della spesa, che corrisponda al numero dell'iterazione 
    const curShoppingItem = shoppingList[i]; 
    // Prendere la variabile globale vuota precedentemente creata, e tramite template literal inserire l'elemento della lista HTML
    shoppingString += `<li>${curShoppingItem}</li>`;
    // Condizione di uscita: incrementare i 
    i++; 
}

console.log(shoppingString);

// OUTPUT
document.querySelector("ol").innerHTML = shoppingString; 