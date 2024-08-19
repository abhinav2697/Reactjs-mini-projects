import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

const ConditionalInput = ({ control, index, field }) => {
    const value = useWatch({
        name: "test",
        control
    });

    return (
        <Controller
            control={control}
            name={`test.${index}.firstName`}
            render={({ field }) =>
                value?.[index]?.checkbox === "on"?<input {...field}/>:null
            }
        />
    )
}
 const CustomRegister = () => {
    const { control, register } = useForm();
    const { fields, append, prepend } = useFieldArray({
        control,
        name:"test"
    })

    return (
        <form>
            {fields.map((field, index)=>(
            <ConditionalInput key={field.id} {...{control,index,field}}/>
            ))}
        </form>
    )
}

export default CustomRegister