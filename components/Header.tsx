import styles from "../styles/Header.module.scss";
import { Box, Button, createMuiTheme } from "@material-ui/core";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <a className={styles.icon}>
          <h1>S</h1>
        </a>
        <nav className={styles.nav}>
          <Button>Docs</Button>
          <Button>Api</Button>
          <Button>Pricing</Button>
          <Button
            variant="contained"
            color="secondary"
            className={styles.btnGrad}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={styles.btnGrad}
          >
            Register
          </Button>
        </nav>
      </div>
    </>
  );
}
