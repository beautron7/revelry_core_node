import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Confirmable extends Component {
  static propTypes = {
    children: PropTypes.node,
    message: PropTypes.string,
    onConfirm: PropTypes.func
    classToConfirm: PropTypes.string
  };

  static defaultProps = {
    message: "Are you sure?"
    classToConfirm: "DANGEROUS"
  };

  showConfirmation(){
    document.createElement()
  }

  render() {
    console.log(this.children)
  }
}
//Needs to reqriet hrefs to display a modal with a button
