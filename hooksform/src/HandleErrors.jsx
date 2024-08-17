import { useForm } from "react-hook-form";

export default function HandleErrors() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })}
                aria-invalid={errors.firstName?"true":"false"}
            />
            {errors.firstName?.type === 'required' && <p role="alert">First Name is required</p>}
            
            <input {...register("lastName", { required: true })}
                aria-invalid={errors.lastName?"true":"false"}
            />
            {errors.lastName?.type === 'required' && <p role="alert">Last Name</p>}
            <input {...register("email", { required: "Email is required" })}
                aria-invalid={errors.email?"true":"false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}
            <input type="submit"/>
        </form>
    )
}