import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Navi from "../components/HomeNav";
import GalleryNavi from "../components/GalleryNav";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navitage("/Add");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <GalleryNavi />
      <div className="login">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <span>Wrong email or password!</span>}
        </form>
      </div>
    </>
  );
};

export default Login;
