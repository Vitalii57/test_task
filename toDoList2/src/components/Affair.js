import React, { Component } from "react";

export default class Affair extends Component {
  affair = this.props.affair;
  render() {
    return (
      <div>
        <div className="affair">
        <button className="edit">Редактировать запись</button>
          <h3>{this.affair.data}</h3>
          <h4>{this.affair.time}</h4>
          <p className="paragraph">{this.affair.text}</p>
          <b>{this.affair.checked ? "Молодец" : "Ждет выполнения..."}</b>
        </div>
      </div>
    );
  }
}
