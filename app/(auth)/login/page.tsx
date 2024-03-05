import styles from "./page.module.css";
import { Typography } from "@mui/material";
import LoginForm from "@/components/auth/login-form";
import { Fragment } from "react";
import LoginForms from "@/components/auth/login-forms";

export default function Login() {
  return (
    <Fragment>
      <LoginForms />
    </Fragment>
  );
}
