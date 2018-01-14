
import React from 'react';

export default function Message(props) {
  console.log(props);
  const list = props.messageList.map((message, index) => {
    return (
      <li key={`message-${index}`}>{message}</li>
    )
  })
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}