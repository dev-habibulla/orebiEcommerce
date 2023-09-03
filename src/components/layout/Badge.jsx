import React from 'react'

const Badge = ({title}) => {
  return (
    <span className=" absolute top-5 left-5 bg-primary inline-block py-2 px-8 text-white">
     { title}
    </span>
  )
}

export default Badge
