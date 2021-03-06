import React, {Component} from 'react'
import CheckableFieldset from './CheckableFieldset'
import Checkbox from './Checkbox'

export class Basics extends Component {
  render() {
    return (
      <CheckableFieldset label="Poll">
        <Checkbox name="poll" defaultValue="1" label="One" />
        <Checkbox name="poll" defaultValue="2" label="Two" />
        <Checkbox name="poll" defaultValue="3" label="Three" />
      </CheckableFieldset>
    )
  }
}
