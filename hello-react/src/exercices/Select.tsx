import './Select.css';

import { Component } from 'react';

class Select extends Component {
  state = {};
  render() {
    const {} = this.state;
    const {} = this.props;
    return (
      <div className="Select">
        <div className="Select_selected">Selected item</div>
        <div className="Select_menu">
          <div className="Select_item">Item 1</div>
          <div className="Select_item">Item 2</div>
          <div className="Select_item">Item 3</div>
        </div>
      </div>
    );
  }
}

export default Select;

// Exercice 3
// Le composant Select aura 3 props : items (string[]), selected (string), onSelected (function)
// et 1 state : open (boolean default false)
// Afficher les props items et selected dans le JSX
// Conditionner l'affichage des items au state open
// Au clic de selected, passer open à !open
// Au clic de item, remonter la valeur en appelant la props onSelected, passer open à !open
// Ecouter le click de document dans componentDidMount, y passer open à false
// Retirer le click de document dans componentWillUnmount avec removeEventListener
