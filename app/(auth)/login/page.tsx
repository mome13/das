import styles from "./page.module.css";
import { Container, Typography, Paper, FormHelperText } from "@mui/material";
import LoginForm from "@/components/auth/login-form";

export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={styles.paper} elevation={3}>
        <Typography component="h1" variant="h1">
          {"ورود"}
        </Typography>

        <LoginForm />
      </Paper>
    </Container>
  );
}
