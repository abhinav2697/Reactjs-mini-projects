import React from 'react'
import { useForm } from "react-hook-form";

const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label,{required})}/>
    </>
)

const select = React.forwardRef(({ onChange, onBlur, name, label }, ref)=> (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
))



const IntegratingHookForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <input label="firstName" register={register} required />
          <select label="Age"{...register("Age")} />
          <input type="submit"/>
   </form>
  )
}

export default IntegratingHookForm