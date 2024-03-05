import styles from "./page.module.css";
import { Container, Paper } from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.main}>
      <Container component="main" maxWidth="xs">
        <Paper className={styles.paper} elevation={3}>
          {children}
        </Paper>
      </Container>
    </div>
  );
}
