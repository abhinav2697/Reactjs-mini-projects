import React from 'react'
import { useForm } from "react-hook-form";

const HookForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>firstName</label>
      <input {...register("firstName", { required: true, maxLength: 20 })} /><br/>
      <label>LastName</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /><br></br>
      <label>Gender</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select><br />
      <label>test</label>
      <input defaultValue="test" {...register("example")} /><br />
      <label>exampleRequired</label>
      <input {...register("exampleRequired", { required: true })} /><br />
      <label>Age</label>
      <input {...register("age",{min:18,max:99})}/><br/>
      {errors.exampleRequired && <span>This field is require</span>}
      <input type="submit"/>
    </form>
  )
}

export default HookForm