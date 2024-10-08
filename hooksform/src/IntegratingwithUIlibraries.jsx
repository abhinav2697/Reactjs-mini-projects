import React from 'react'
import Select from "react-select";
import { useForm,Controller } from 'react-hook-form';
import Input from "@material-ui/core/Input";

const IntegratingwithUIlibraries = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            select:{}
        }
    })
    const onSubmit = data => console.log(data);
  return (
   
      <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
              name="firstName"
              control={control}
              render={({ field }) => <Input {...field} />}/>
          <Controller
              name="select"
              control={control}
              render={({ field }) => <Select{...field}
                  options={[
                      { value: "chocolate", label: "chocolate" },
                      { value: "strawberry", label: "strawberry" },
                      {value:"vanilla",label:"vanilla"}
                  ]}
              />}
          />
          <input type="submit"/>
      </form>
  )
}

export default IntegratingwithUIlibraries