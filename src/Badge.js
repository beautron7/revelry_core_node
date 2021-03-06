import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from './Icon'

const PROP_NAME_TO_CLASS_NAME = {
  secondary: ['secondary', 'rev-Badge--secondary'],
  alert: ['alert', 'rev-Badge--alert'],
  warning: ['warning', 'rev-Badge--warning'],
  success: ['success', 'rev-Badge--success'],
}
const PROP_NAMES = Object.keys(PROP_NAME_TO_CLASS_NAME)
const PROP_TYPES = {
  icon: PropTypes.string,
}

PROP_NAMES.forEach((key) => PROP_TYPES[key] = PropTypes.bool)

export default class Badge extends Component {

  static propTypes = PROP_TYPES;

  render() {
    const {className, children, icon, ...props} = this.props

    const propClassNames = []
    PROP_NAMES.forEach((name) => {
      if(props[name]) {
        propClassNames.push(PROP_NAME_TO_CLASS_NAME[name])
        delete props[name]
      }
    })

    const newClassName = classNames(className, 'badge', 'rev-Badge', propClassNames)

    return (
      <span {...props} className={newClassName}>
        {icon ? <Icon i={icon} className="rev-Badge-icon" /> : null} {children}
      </span>
    )
  }
}
