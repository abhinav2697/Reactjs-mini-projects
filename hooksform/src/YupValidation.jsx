import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

{/*YupValidationError*/} 
const schema = yup.object().shape({
    name: yup.string().required(),
    age:yup.number().required(),
}).required()

const YupValidation = () => {
    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver:yupResolver(schema),
    })
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(d=>console.log(d))}>
            <input {...register("name")} />
            <p>{errors.name?.message}</p>
            <input type="number" {...register("age")} />
            <p>{errors.age?.message}</p>
            <input type="submit"/>
    </form>
)
}

export default YupValidation