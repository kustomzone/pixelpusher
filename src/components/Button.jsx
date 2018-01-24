import React from 'react'
import classnames from 'classnames'
import {clipboard} from 'electron'

export default class Button extends React.Component {
  render() {
    const {tiny, icon, disabled, onClick, ...rest} = this.props

    return (
      <button
        className={classnames("button", {
          "button-tiny": tiny,
          "button-disabled": disabled,
          [`button-${icon}`]: icon,
        })}
        onClick={disabled ? null : onClick}
        {...rest}
      />
    )
  }
}