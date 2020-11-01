import { Box, Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import styles from "../styles/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <>
      <Box boxShadow={3}>
        <div className={styles.section}>
          <img src="./undraw_post.svg"></img>
          <div className={styles.feature}>
            <h2>Extremely Customisable</h2>
            <br />
            <Button variant="contained">
              Get Started <ChevronRight />
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}
