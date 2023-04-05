// recommandé
function loop1(letters: string[]) {

}

// possible mais pas recommandé
function loop2(letters: Array<string>) {

}

// inférence de type: détection du type à partir de l'initialisation
const letters = ['a', 'b'];

// pour les tableaux vides pensez à typer
const values: string[] = [];

// values.push(123); // erreur
values.push('abc');
