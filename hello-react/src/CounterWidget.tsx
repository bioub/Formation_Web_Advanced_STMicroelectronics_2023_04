import { Component, MouseEvent, ReactNode } from 'react';

type Props = {}

class CounterWidget extends Component {
  state = {
    count: 0,
  };

  // constructor(props: Props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render(): ReactNode {
    return (
      <button className="CounterWidget" onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

export default CounterWidget;
