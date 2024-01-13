import React, { Component } from "react";
import Affair from "./Affair";
import AddAffair from "./AddAffair";

export default class Affairs extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     affairs: [
  //       {
  //         id: 1,
  //         data: '12.12.2023',
  //         time: '14:36',
  //         text: 'Забрать документы из МФЦ',
  //         checked: false,
  //       },
  //       {
  //         id: 2,
  //         data: '12.17.2023',
  //         time: '17:30',
  //         text: 'Записаться в зал',
  //         checked: false,
  //       },
  //       {
  //         id: 3,
  //         data: '01.04.2024',
  //         time: '08:30',
  //         text: 'Поехать во Мценск',
  //         checked: false,
  //       },
  //     ]
  //   }
  // }

  render() {
    if (this.props.affairs.length > 0) {
      return (
        <div>
          {this.props.affairs.map((el) => (

<Affair key={el.id} affair={el}/>
        ))}
        </div>
      );
    } else {
      return (
        <div className="affair">
        <h3>В данный момент никаких задач нет</h3>
      </div>
      )
    }
  }
}
