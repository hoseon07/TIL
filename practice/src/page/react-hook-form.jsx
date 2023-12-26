import React from "react";
import { useForm } from "react-hook-form";

export default function Myform() {
  const [register, handleSubmit, errors] = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="firstName" ref={register({required: true})} />
        {errors.firstName && <span>First Name is required</span>}

        <input type="text" name="lastName" ref={register({required:true})}/>
        {errors.lastName && <span>Last Name is required.</span>}

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
