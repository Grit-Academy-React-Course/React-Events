import React from "react";
import MyForm from "./components/myForm/MyForm";


class App extends React.Component {
  consoleFormList = (list) => {
    console.log(list);
  }

  render() {
    return (
      <div>
        <MyForm consoleFormList={this.consoleFormList} />
      </div>

    )
  }
}

export default App;