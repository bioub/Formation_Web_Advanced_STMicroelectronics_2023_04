import { ChangeEvent, Component } from 'react';

type Props = {}
type State = {
  name: string;
}

class Helloworld extends Component<Props, State> {
  state = {
    name: 'Romain'
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    const { name } = this.state;
    return (
      <div className="ExHelloworld">
        <div>
          Name : <input value={name} onChange={this.handleChange} />
        </div>
        <p>
          Hello <span>{name}</span> !
        </p>
      </div>
    );
  }
}

export default Helloworld;

// Exercice 1
// Créer une propriété name sur le state avec une valeur par défaut
// L'afficher dans la balise span et dans le champ
// A la saisi dans le champ (methode handleInput)
// modifier la valeur de name du state
// (pour récupérer la valeur du champ utiliser event.currentTarget.value)
// Le composant se raffraichira tout seul
