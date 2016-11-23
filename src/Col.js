import React, {Component} from 'react'
import classNames from 'classnames'

const BOOL_PROPS_TO_CLASS_NAMES = {
  smallCentered: 'small-centered',
  mediumCentered: 'medium-centered',
  largeCentered: 'large-centered',

  smallUncentered: 'small-uncentered',
  mediumUncentered: 'medium-uncentered',
  largeUncentered: 'large-uncentered',

  end: 'end',

  expanded: 'expanded',
}

const BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES)

const NUMBER_PROPS_TO_CLASS_NAMES = {
  small: (x) => `small-${x}`,
  medium: (x) => `medium-${x}`,
  large: (x) => `large-${x}`,

  smallOffset: (x) => `small-offset-${x}`,
  mediumOffset: (x) => `medium-offset-${x}`,
  largeOffset: (x) => `large-offset-${x}`,

  smallPush: (x) => `small-push-${x}`,
  mediumPush: (x) => `medium-push-${x}`,
  largePush: (x) => `large-push-${x}`,

  smallPull: (x) => `small-pull-${x}`,
  mediumPull: (x) => `medium-pull-${x}`,
  largePull: (x) => `large-pull-${x}`,
}

const NUMBER_PROPS = Object.keys(NUMBER_PROPS_TO_CLASS_NAMES)

export default class Col extends Component {
  render() {
    const {children, className, ...props} = this.props

    const boolClassNames = []
    BOOL_PROPS.forEach((name) => {
      if(props[name]) {
        boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name] )
      }
      delete props[name]
    })

    const numberClassNames = []
    NUMBER_PROPS.forEach((name) => {
      const value = props[name]
      const fn = NUMBER_PROPS_TO_CLASS_NAMES[name]
      if(value != null) {
        numberClassNames.push(fn(value))
      }
      delete props[name]
    })

    const divClassName = classNames(className, 'columns', boolClassNames, numberClassNames)

    return (
      <div {...props} className={divClassName}>
        {children}
      </div>
    )
  }

}
