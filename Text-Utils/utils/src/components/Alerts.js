import React from 'react'

export default function Alerts(props) {
  return (
    <div style ={{height :"50px"}}>
     {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        {props.Alert.msg}
        
    </div>}
    </div>
  )
}
