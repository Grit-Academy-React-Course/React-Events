import React from "react";

class App extends React.Component {
  inputName = ""
  clickMe = (event) => {
    console.log("I am clicked", event);
  }

  clickMeTwo = (event, string) => {
    console.log(event.target);
    console.log("I am clicked two", event.target.innerHTML);
  }
  clickMeThree = (string) => {
    console.log(string);
    window.location.reload();
  }

  handelInputData = (e) => {
    console.log(e.target.value);
    this.inputName = e.target.value;
    localStorage.setItem("inputName", this.inputName)
  }
  inputFocus = () => {
    console.log("I am focused");
  }
  inputBlur = () => {
    console.log("Blurrrrrrrrrrred");
  }
  clickMeFour = (e) => {
    e.target.style.display = "none";
  }

  specialButton = () => {
    //Here is an example to a method that returns a button and handels the button onClick event. 
    const clickMeFive = (e) => {
      console.log("Test ClickMeFive");
    }
    const name = "ClickMeFive";
    return (
      <button onClick={clickMeFive}>{name}</button>
    )
  }

  render() {
    this.inputName = localStorage.getItem("inputName")
    return (
      <div className="app">
        <button onClick={this.clickMe}>Click me</button>{/* IF you only care about the event, no need to add arraow functions in OncliCk event. It will be automatically provided. Check the method clickME */}
        <button onClick={(event) => this.clickMeTwo(event, "Hello")}>Click me Two</button>{/* If you need to send parametera to the method, you need to do arrow function */}
        <button onClick={() => this.clickMeThree(this.inputName)}>Click me Three</button>
        <input type="text"
          onChange={this.handelInputData /* OnChange is used when you want to check everyTIme the user writes something inside the input */}
          onFocus={this.inputFocus}
          onBlur={this.inputBlur}>
        </input>

        <h1>hi {this.inputName}</h1>

        <button onClick={this.clickMeFour}>ClickMeFour</button>
        {this.specialButton()}
        {/* <form onSubmit={}></form> */}
      </div>
    )
  }
}

export default App;