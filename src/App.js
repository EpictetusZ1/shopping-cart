import React from "react";
import styles from "./styles/App.module.css"
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div className={styles.app}>
      <Welcome />
    </div>
  );
}

export default App;
