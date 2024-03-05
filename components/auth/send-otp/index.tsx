"use client";
import styles from "./send-otp.module.css";
import { FormControl, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { SendOTPSchema, SendOTP } from "@/schemas";

import fetcher from "@/lib/apiClient";
import useLogin from "@/hooks/use-login";

export default function SendOTPForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendOTP>({
    resolver: joiResolver(SendOTPSchema),
  });

  const { loginState, setLoginState } = useLogin();

  const submit: SubmitHandler<SendOTP> = (loginData) => {
    
    fetcher(
      "https://api-admin-dev.tehranex.com/otc-admin/v1/iam/admin/otp/sms/send",
      {
        method: "post",
        credentials: "include",
        headers: {
          "x-csrf-token": localStorage.getItem("x-csrf-token") || "",
        },
        body: JSON.stringify(loginData),
      }
    ).then((response) => {
      setLoginState({ step: 2 });
      console.log(response);
    });
  };

  return (
    <div>
      <Typography component="h1">{"ارسال کد"}</Typography>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={handleSubmit(submit)}
      >
        <FormControl margin="normal">
          <Button type="submit" fullWidth variant="contained">
            {"تایید"}
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
