import "./App.css";
import Header from "./components/Header";
import Affairs from "./components/Affairs";
import React, { Component } from "react";
import AddAffair from "./components/AddAffair";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affairs: [
        {
          id: 1,
          data: "12.12.2023",
          time: "14:36",
          text: "Забрать документы из МФЦ",
          checked: false,
        },
        {
          id: 2,
          data: "12.17.2023",
          time: "17:30",
          text: "Записаться в зал",
          checked: false,
        },
        {
          id: 3,
          data: "01.04.2024",
          time: "08:30",
          text: "Поехать во Мценск",
          checked: false,
        },
      ],
    };
    this.addAffair = this.addAffair.bind(this)
    this.deleteUser = this.deleteUser.bind(this)

  }
  render() {
    return (
      <div>
        <h1>
          <Header title="Список дел" />
        </h1>
        <main>
          <Affairs affairs={this.state.affairs} onDelete={this.deleteUser}/>
        </main>
        <aside>
          <AddAffair onAdd={this.addAffair}/>
        </aside>
      </div>
    );
  }

  deleteUser(id) {
    this.setState({affairs: this.state.affairs.filter(el => el.id !== id)})
  }

  addAffair(affair) {
    const id = this.state.length + 1;
    this.setState({ affairs: [...this.state.affairs, {id, ...affair}]})
    // console.log(affair)
  }
}
