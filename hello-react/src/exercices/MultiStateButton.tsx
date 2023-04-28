import { Component } from 'react';

type Props = {
  items: string[];
  selected: string;
  onSelected(val: string): void;
};

class MultiStateButton extends Component<Props> {

  handleClick = () => {
    const selectedIndex = this.props.items.indexOf(this.props.selected);
    const nextIndex = (selectedIndex + 1) % this.props.items.length;
    this.props.onSelected(this.props.items[nextIndex]);
  }

  render() {
    const { selected } = this.props;
    return <button className="ExMultiStateButton" onClick={this.handleClick}>{selected}</button>;
  }
}

export default MultiStateButton;

// Exercice 2
// Le composant MultiStateButton aura 3 props : items (string[]), selected (string), onSelected (function)
// Au chargement du composant afficher dans le bouton
// la props selected
// Au clic du bouton afficher l'élément suivant en remontant la valeur au parent via onSelected
// repartir du début du tableau si besoin
