import { useForm, useFieldArray } from "react-hook-form";
const ControlledFieldArray = () => {
    const { register, handleSubmit, control, watch } = useForm < FormValues > ();
    const { fields, append } = useFieldArray({
        control,
        name: "fieldArray"
    });
    const watchFieldArray = watch("fieldArray");
    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray[index]
        }
    });
    return (
        <form>
            {controlledFields.map((field, index) => {
                return <input {...register(`fieldArray.${index}.name` as const)}/>
            })}
        </form>
    )
}

export default ControlledFieldArray;