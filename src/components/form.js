import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.id, name: "", value: 0, price: 0};

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
    const group = "form-group col-3 mr-2";
    const control = "form-control";
    const label = "mr-2";
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
            <label className={label}>Quantité :</label>
            <input
              className={control}
              type="number"
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className={group}>
            <label className={label}>Prix :</label>
            <input
              className={control}
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              step='0.01'
            />
          </div>
        </form>
        <div className="col-1">
          <button
            className={buttonClass}
            onClick={() =>
              this.props.onSubmit({
                id: this.state.id,
                name: this.state.name,
                value: this.state.value,
                price: this.state.price
              })
            }
          >
            Ajouter
          </button>
          </div>
      </div>
      
    );
  }
}

export default Form;
