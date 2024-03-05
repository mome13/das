"use client";

import { LoginProvider } from "@/hooks/use-login";
import { useState } from "react";
import LoginForm from "../login-form";
import OTPForm from "../otp-form";
import SendOTPForm from "../send-otp";
import TOTPForm from "../totp-form";

export default function LoginForms() {
  const [loginState, setLoginState] = useState();

  return (
    <LoginProvider value={{ loginState, setLoginState }}>
      {((loginState && loginState?.step === 0) || !loginState) && <LoginForm />}
      {loginState && loginState?.step === 1 && <SendOTPForm />}
      {loginState && loginState?.step === 2 && <OTPForm />}
      {loginState && loginState?.step === 3 && <TOTPForm />}
    </LoginProvider>
  );
}
