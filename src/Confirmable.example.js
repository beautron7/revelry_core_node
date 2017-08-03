import React, {Component} from 'react'
import Confirmable from './Confirmable'

export class Example1 extends Component {
  render() {
    return (
      <Confirmable message="Are you sure you want to destroy the universe?">
        <form class="" action="index.html" method="post">
          <span>Enter Your first name:</span>
          <input type="text" name="FirstName" value=""></input>
          <button class="DANGEROUS" type="submit"><span>Begin Quantum Bogosort</span></button>
        </form>
      </Confirmable>
    )
  }
}
