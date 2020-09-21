import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { id: props, name: "", value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonClass = "btn  btn-secondary";
    const group = "form-group mx-2";
    const control = "from-control";
    const label = "mx-2";
    return (
      <div className="row my-3">
        <form className="form-inline">
          <div className={group}>
            <label className={label}>Nom de l'article:</label>
            <input
              className={control}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className={group}>
            <label className={label}>Nombre d'article :</label>
            <input
              className={control}
              type="number"
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div>
          <button
            className={buttonClass}
            onClick={() =>
              this.props.onSubmit({
                id: this.state.id,
                name: this.state.name,
                value: this.state.value,
              })
            }
          >
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
