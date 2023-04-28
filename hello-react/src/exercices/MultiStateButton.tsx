import { Component } from 'react';

class MultiStateButton extends Component {
  render() {
    const {  } = this.props;
    return (
      <button className="ExMultiStateButton">
       LA VALEUR DU TABLEAU ITEM A AFFICHER
      </button>
    );
  }
}

export default MultiStateButton;

// Exercice 2
// Le composant MultiStateButton aura 3 props : items (string[]), selected (string), onSelected (function)
// Au chargement du composant afficher dans le bouton
// la props selected
// Au clic du bouton afficher l'élément suivant en remontant la valeur au parent via onSelected
// repartir du début du tableau si besoin
