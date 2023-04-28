import { useState } from "react";
import Helloworld from "./Helloworld";
import MultiStateButton from "./MultiStateButton";
import Select from "./Select";

function Exercices() {
  const names = ['Toto', 'Titi', 'Tata'];
  const [name, setName] = useState('Titi');

  function handleSelected(val: string) {
    setName(val);
  }

  return (
    <div className="Exercices">
      <Helloworld />
      <MultiStateButton items={names} selected={name} onSelected={handleSelected} />
      <Select items={names} selected={name} onSelected={handleSelected} />
    </div>
  );
}

export default Exercices;
