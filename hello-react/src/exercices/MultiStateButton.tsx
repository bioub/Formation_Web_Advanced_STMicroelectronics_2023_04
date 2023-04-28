import { Component } from 'react';

class MultiStateButton extends Component {
  state = {

  };
  render() {
    const {  } = this.state;
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
// Au chargement du composant afficher dans le bouton
// le premier élément du tableau
// Au clic du bouton afficher l'élément suivant
// repartir du début du tableau si besoin
