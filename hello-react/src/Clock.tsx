import { useEffect, useState } from "react";

type Props = {
  delay?: number;
}

function Clock({ delay }: Props) {
  console.log('Clock');

  const [now, setNow] = useState(new Date());


  // useEffect(() => {}); // le callback est appelé à chaque appel de Clock (une fois le DOM mis à jour)
  useEffect(() => {
    const _interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => { // cleanup function (destructeur)
      clearInterval(_interval);
    };
  }, []); // le callback est appelé au premier appel de Clock
  // useEffect(() => {}, [delay]); // le callback est appelé au premier appel de Clock puis à chaque fois que delay change



  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
