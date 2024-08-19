import * as React from "react";
import { useForm, useFormState } from "react-hook-form";

export default function UseFormState() {
    const { register, handleSubmit, control } = useFormState({
        defaultValues: {
            firstName:"firstName",
        }
       
    })

    const { dirtyFields } = useFormState({
        control
    });
    const onSubmit = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="firstName" />
            {dirtyFields.firstName && <p>Field is dirty.</p>}
            <input type="submit"/>
        </form>
    )

}