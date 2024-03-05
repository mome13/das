"use client";
import styles from "./login.module.css";
import { FormControl, TextField, Button, Typography } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { LoginFormSchema, LoginFormInputs } from "@/schemas";

import fetcher from "@/lib/apiClient";
import { useEffect } from "react";
import useLogin from "@/hooks/use-login";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: joiResolver(LoginFormSchema),
  });

  const { setLoginState } = useLogin();

  useEffect(() => {
    fetcher(`https://api-admin-dev.tehranex.com/otc-admin/v1/csrf-token`, {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      console.log(response);
      localStorage.setItem("x-csrf-token", response.data.token);
    });
  }, []);

  const submit: SubmitHandler<LoginFormInputs> = (loginData) => {
    fetcher(
      "https://api-admin-dev.tehranex.com/otc-admin/v1/iam/admin/auth/login",
      {
        method: "post",
        credentials: "include",
        headers: {
          "x-csrf-token": localStorage.getItem("x-csrf-token") || "",
        },
        body: JSON.stringify(loginData),
      }
    ).then((response) => {
      console.log(response);
      setLoginState({ step: 1 });
    });
  };

  return (
    <div>
      <Typography component="h1">{"ورود"}</Typography>
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
          {...register("username")}
          autoComplete="userName"
          type="text"
          error={!!errors.username?.message}
        />

        <TextField
          dir="ltr"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="رمز عبور"
          {...register("password")}
          autoComplete={"false"}
          type="text"
          error={!!errors.password?.message}
        />

        <FormControl margin="normal">
          <Button type="submit" fullWidth variant="contained">
            {"ورود"}
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
