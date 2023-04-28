import { useState } from "react";
import Helloworld from "./Helloworld";
import MultiStateButton from "./MultiStateButton";
import Select from "./Select";

function Exercices() {
  const names = ['Toto', 'Titi', 'Tata'];
  const [name, setName] = useState('Toto');

  function handleSelected(val: string) {

  }

  return (
    <div className="Exercices">
      <Helloworld />
      <MultiStateButton />
      <Select />
    </div>
  );
}

export default Exercices;
