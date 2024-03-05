"use client";
import styles from "./otp.module.css";
import { FormControl, TextField, Button, Typography } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { OTPFormSchema, OTPFormInputs } from "@/schemas";

import fetcher from "@/lib/apiClient";
import useLogin from "@/hooks/use-login";

export default function OTPForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormInputs>({
    resolver: joiResolver(OTPFormSchema),
  });

  const { setLoginState } = useLogin();

  const submit: SubmitHandler<OTPFormInputs> = (loginData) => {
    fetcher(
      "https://api-admin-dev.tehranex.com/otc-admin/v1/iam/admin/mfa/otp/sms",
      {
        method: "post",
        credentials: "include",
        headers: {
          "x-csrf-token": localStorage.getItem("x-csrf-token") || "",
        },
        body: JSON.stringify(loginData),
      }
    ).then((response) => {
      setLoginState({ step: 3 });
      console.log(response);
    });
  };

  return (
    <div>
      <Typography component="h1">{"تایید کد"}</Typography>

      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={handleSubmit(submit)}
      >
        <TextField
          dir="rtl"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="code"
          label="رمز یکبار مصرف"
          {...register("code")}
          type="text"
          error={!!errors.code?.message}
        />

        <FormControl margin="normal">
          <Button type="submit" fullWidth variant="contained">
            {"تایید"}
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
