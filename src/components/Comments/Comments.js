import React, { memo } from 'react'

function Comments({username, text}) {
  return (
    <p className="description"><span>{username} </span> {text}</p>
  )
}

export default memo(Comments)