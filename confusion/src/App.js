import Menu from "./components/MenuComponents";
import { DISHES } from "./shared/dishes";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
