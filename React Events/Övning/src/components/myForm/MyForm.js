import React from "react";

class MyForm extends React.Component {
    formObject = {
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    }
    objectsList = []
    submitForm = (event) => {
        event.preventDefault();
        const formObject = this.formObject;
        if (formObject.password !== formObject.confirmPassword) {
            alert("Your password doesnt match with confirm password");
            return;
        }
        formObject.password = [...formObject.password].fill("*").join("");
        formObject.confirmPassword = [...formObject.confirmPassword].fill("*").join("");
        this.objectsList.push(formObject)
        this.props.consoleFormList(this.objectsList);
    }
    render() {
        return (
            <div className="myFormContainer">
                <form onSubmit={(event) => this.submitForm(event)} className="myForm">
                    <input type="text" placeholder="FirstName " onChange={(event) => this.formObject.firstName = event.target.value} />
                    <input type="text" placeholder="LastName " onChange={(event) => this.formObject.lastName = event.target.value} />
                    <input type="password" placeholder="Password " onChange={(event) => this.formObject.password = event.target.value} />
                    <input type="password" placeholder="Confirm Password " onChange={(event) => this.formObject.confirmPassword = event.target.value} />
                    <div onChange={(event) => this.formObject.gender = event.target.value} className="genderInput">
                        <div> Male: <input type="radio" name="gender" value="male" /></div>
                        <div>  Female: <input type="radio" name="gender" value="female" /></div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default MyForm;