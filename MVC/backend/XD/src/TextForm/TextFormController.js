import React from "react";

export class TextFormController extends React.PureComponent {
  state = {
    textField: "",
    responseMessage: "",
    isSubmitting: false
  };

  handleTextChange = e => {
    this.setState({ textField: e.target.value });
  };

  handleClickSubmit = () => {
    const { textField } = this.state;
  
    this.setState({
      isSubmitting: true
    });
  
    const requestBody = {
      user_name: textField
    };
  
    fetch("http://localhost:5000/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response from server:", data.message);
        // Update the response message state
        this.setState({ responseMessage: data.message }); 
        setTimeout(() => {
          this.setState({ responseMessage: "" }); // Clear the response message after 30 seconds
        }, 5000);
      })
      .catch(error => {
        console.error("Error sending data:", error);
        // Handle errors here
      })
      .finally(() => {
        this.setState({ isSubmitting: false });
      });
  };
  


  render() {
    return this.props.children({
      onTextChange: this.handleTextChange,
      onClickSubmit: this.handleClickSubmit,
      textField: this.state.textField,
      responseMessage: this.state.responseMessage,
      isSubmitting: this.state.isSubmitting
    });
  }  
}
