"use client";
import styles from "./register.module.css";
import { FormControl, TextField, Button } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { RegisterFormSchema, RegisterFormInputs } from "@/schemas";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: joiResolver(RegisterFormSchema),
  });
  

  const submit : SubmitHandler<RegisterFormInputs>= (registerData) => {
    console.log(registerData);
  };

  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={handleSubmit(submit)}
    >
      <TextField
        dir="ltr"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="userName"
        label="نام کاربری"
        {...register('userName')}
        autoComplete="userName"
        type="email"
        error={!!errors.userName?.message}
      />

      <TextField
        dir="ltr"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="رمز عبور"
        {...register('password')}
        autoComplete={"false"}
        type="password"
        error={!!errors.password?.message}
      />

      <FormControl margin="normal">
        <Button type="submit" fullWidth variant="contained">
          {"ثبت نام"}
        </Button>
      </FormControl>
    </form>
  );
}
