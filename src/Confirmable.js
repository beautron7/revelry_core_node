import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Confirmable extends Component {
  static propTypes = {
    children: PropTypes.node,
    message: PropTypes.string,
    onConfirm: PropTypes.func,
    classToConfirm: PropTypes.string,
  };

  static defaultProps = {
    message: "Are you sure?",
    classToConfirm: "DANGEROUS",
  };

  showConfirmation(){

  }

  /** @method traverse:
   *The traverse function takes a react element and will pick out elements that are marked as dangerous
   *The function will always return an array of 0 or more dangerous react elements.
   * 1.  If an element is "dangerous", it returns it as a one item array.
   * 2.  Otherwise, If an element has a single child, it runs the function on the child
   *     and returns the result.
   * 3.  Otherwise, If an element has multiple children, it runs the function on every child,
   *     and adds each result from each call to one array, which the function returns.
  **/

  static traverse(thing) {//Returns all elements with the class `dangerous` through recursion.
    if (React.isValidElement(thing)) {
      if(thing.props && typeof thing.props.class === "string" && thing.props.class.indexOf('DANGEROUS') != -1)
        return [thing]
      if(thing.props.children)
        return Confirmable.traverseChildObj(thing.props.children)
    }
    return []
  }

  static traverseChildObj(children){//looks through children to find dangerous ones
    if(Array.isArray(children)){
      var results = []
      for (var i = 0; i < children.length; i++) {
        const tmp = Confirmable.traverse(children[i])
        if(tmp.length != 0)
          results.push(...tmp)
      }
      return results
    } else if (React.isValidElement(children))
      return Confirmable.traverse(children)
    return []
  }

  constructor(props,b,c){
    super(props,b,c)
    console.log(props)
    console.log(Confirmable.traverseChildObj(props.children))
  }

  render() {
    console.log(this.children)
    return(
      <h1>Bamboozle</h1>
    )
  }
}
//Needs to reqriet hrefs to display a modal with a button
