import React from 'react'
import _ from 'lodash'

function getDisplayName (Component) {
  return Component.displayName || Component.name || 'Component'
}

/**
 * Decorator that converts immutable props to plain JS.
 * Optionally, filter which props get converted.
 */
export default function toJS (propsMap) {
  function decorate (Component) {
    class ToJS extends React.Component {
      static displayName = `ToJS(${getDisplayName(Component)})`
      static WrappedComponent = Component

      toJS () {
        return _.reduce(this.props, (result, value, key) => {
          if (propsMap) {
            if (propsMap[key]) {
              result[propsMap[key]] = (typeof value.toJS === 'function') ? value.toJS() : value
            } else {
              result[key] = value
            }
          } else {
            result[key] = (value && typeof value.toJS === 'function') ? value.toJS() : value
          }
          return result
        }, {})
      }

      render () {
        return (
          <Component {...this.toJS()}/>
        )
      }
    }
    return ToJS
  }

  // Support `true`.
  if (propsMap === true) {
    propsMap = null
  }

  // Support an array of propNames.
  if (_.isArray(propsMap)) {
    propsMap = _.keyBy(propsMap, _.identity)
  }

  // Support using @toJS or @toJS(propsMap)
  if (_.isPlainObject(propsMap) || !propsMap) {
    return decorate;
  } else {
    propsMap = null;
    return decorate.apply(null, arguments)
  }
}