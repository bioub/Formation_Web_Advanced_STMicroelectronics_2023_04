import './Select.css';

import { Component, createRef } from 'react';

type Props = {
  items: string[];
  selected: string;
  onSelected(val: string): void;
};

type State = {
  open: boolean;
};

class Select extends Component<Props, State> {
  state = {
    open: false,
  };

  hostRef = createRef<HTMLDivElement>();

  componentDidMount(): void {
    // document.addEventListener('click', (event) => {
    //   this.setState({
    //     open: false
    //   })
    // }, { capture: true });
    document.addEventListener('click', (event) => {
      if (!this.hostRef.current?.contains(event.target as HTMLElement)) {
        this.setState({
          open: false,
        });
      }
    });
  }

  handleSelectedClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleItemClick = (val: string) => {
    this.setState({
      open: false,
    });
    this.props.onSelected(val);
  };

  render() {
    const { open } = this.state;
    const { items, selected } = this.props;
    return (
      <div className="Select" ref={this.hostRef}>
        <div className="Select_selected" onClick={this.handleSelectedClick}>
          {selected}
        </div>
        {open && (
          <div className="Select_menu">
            {items.map((it) => (
              <div className="Select_item" key={it} onClick={() => this.handleItemClick(it)}>
                {it}
              </div>
            ))}
          </div>
        )}
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
