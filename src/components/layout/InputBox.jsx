import React from 'react'

const InputBox = (props) => {
  return (
    <div className="mb-6">
      <h4 className=" mb-2.5font-dm font-bold text-base placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-[#767676]">{props.title}</h4>
      <props.as placeholder={props.placeholder} className=" w-full border-b border-solid border-[#f0f0f0] pb-2.5 outline-0"/>
    </div>
  )
}
export default InputBox
