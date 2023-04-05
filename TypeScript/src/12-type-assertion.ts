const formEl = document.querySelector('.todos-form') as HTMLFormElement;

// si on ne force pas le type à HTMLFormElement
// la ligne suivant serait en erreur
formEl.submit();


// il existe aussi une syntaxe inspirée de Java (pas recommandé)
const formEl2 = <HTMLFormElement> document.querySelector('.todos-form');
formEl2.submit();

// les assertions de type ne sont pas type safe
// il aurait fallu écrire en type safe

const formEl3 = document.querySelector('.todos-form');

// type narrowing (ligne qui vérifie au runtime) -> type safe
if (formEl3 && formEl3 instanceof HTMLFormElement) {
  formEl3.submit();
}
