import React from 'react'
import { useForm,useFieldArray, Controller } from 'react-hook-form';



const UseFieldArray = () => {
  const { control, register, handleSubmit, reset, trigger, setError } = useForm({
    
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name:"test",
    
});
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`test.${index}.firstName`)} />
            <Controller
              render={({ field }) => <input{...field} />}
              name={`test.${index}.lastName`}
              control={control}
            />
            <button type="button" onClick={()=>remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}>
        append
      </button>
      <input type="submit" />
    
  </form>
    
  )
}

export default UseFieldArray