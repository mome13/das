import styles from "./page.module.css";
import { Container, Typography, Paper, FormHelperText } from "@mui/material";
import RegisterForm from "@/components/auth/register-form";

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={styles.paper} elevation={3}>
        <Typography component="h1" variant="h1">
          {"ثبت نام"}
        </Typography>

        <RegisterForm />
      </Paper>
    </Container>
  );
}
