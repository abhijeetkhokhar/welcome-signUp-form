import React from 'react'

export default function User({data}) {
  return (
    <div>
      <h1>{data.map((val,idx)=><ul><li key={idx}>{val}</li></ul>)}</h1>
    </div>
  )
}
