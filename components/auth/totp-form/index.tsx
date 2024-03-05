"use client";
import styles from "./totp.module.css";
import { FormControl, TextField, Button, Typography } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { OTPFormSchema, OTPFormInputs } from "@/schemas";

import fetcher from "@/lib/apiClient";

export default function TOTPForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormInputs>({
    resolver: joiResolver(OTPFormSchema),
  });

  const submit: SubmitHandler<OTPFormInputs> = (totpData) => {
    fetcher(
      "https://api-admin-dev.tehranex.com/otc-admin/v1/iam/admin/mfa/totp",
      {
        method: "post",
        credentials: "include",
        headers: {
          "x-csrf-token": localStorage.getItem("x-csrf-token") || "",
        },
        body: JSON.stringify(totpData),
      }
    ).then((response) => {
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
