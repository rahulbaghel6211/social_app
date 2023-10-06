import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css'
function Home(props) {
  
  return (
    <div>
      <div className={styles.container}>
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
        <h2>
          <Link to="/login">Logout</Link>
        </h2>
        <br />
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
