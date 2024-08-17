import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { TextField,Checkbox } from '@material-ui/core';

const IntegratingControlledInputs = () => {
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            Checkbox:false,
        }
    })
  const onSubmit = data => console.log(data);
  return (    
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field}/>}
      />
      <input type="submit"/>
    </form>
  )
}

export default IntegratingControlledInputs