import { Component, ReactNode } from "react";

type Props = {
  delay?: number;
}

type State = {
  now: Date;
}

class ClockWidget extends Component<Props, State> {

  state = {
    now: new Date(),
  };

  private interval!: ReturnType<typeof setInterval>;

  // Le constructeur n'a d'intérêt que si
  // on reçoit des valeurs initiales de props
  // (defaultValue, defaultChecked...)
  // Ne jamais synchroniser 2 states (parent/enfant)
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     now: new Date(),
  //   };
  // }
  componentDidMount(): void {
    // après le premier render du composant
    this.interval = setInterval(() => {
      this.setState({
        // on ne passe que les différences (updateState, mergeState, assignState)
        now: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {

  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  render(): ReactNode {
    const { delay } = this.props;
    const { now } = this.state;
    return (
      <div className="ClockWidget">
        {now.toLocaleTimeString()}
      </div>
    )
  }
}

export default ClockWidget;
