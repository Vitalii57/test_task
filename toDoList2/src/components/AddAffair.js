import React, { Component } from 'react'

export default class AddAffair extends Component {
    constructor(props) {
        super(props);
        this.state = {
          affairs: [
            {
              data: "",
              time: "",
              text: "",
              checked: true,
            },
          ],
        };
      }
  render() {
    return (
      <form ref={(el) => this.myForm = el}>
        <input placeholder='Укажите дату' onChange={(e) => this.setState({data: e.target.value})} />
        <input placeholder='Укажите время' onChange={(e) => this.setState({time: e.target.value})}/>
        <textarea placeholder='Текст напоминания' onChange={(e) => this.setState({text: e.target.value})}></textarea>
        <button type='button' onClick={() => {
          this.myForm.reset()
          this.props.onAdd({
            data: this.state.data,
            time: this.state.time,
            text: this.state.text,
        })}}>Добавить</button>
      </form>
    )
  }
}

