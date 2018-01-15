
import React from 'react';

export default function MessageInput(props) {
  return (
    <div>
      <textarea
        name="message-input"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
    </div>
  )
}
