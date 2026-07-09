import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/fireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./Auth.css";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate();

  // Handle User Login
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user,
        });
        // navigate("/"); // Redirect to home page on success
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  // Handle New User Registration
  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user,
        });
        console.log("sign up:", userCredential.user);
        // navigate("/"); // Redirect to home page on success
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return (
    <div className="login-container">
      {/* Amazon Logo */}
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </Link>

      {/* Main Auth Form Box */}
      <div className="login-box">
        <h1>Sign-in</h1>

        {error && <p className="login-error-msg">{error}</p>}

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            onClick={handleSignIn}
            className="login-signin-btn"
            disabled={loading}
          >
            {loading ? (
              <div className="flex flex-row gap-1 justify-center items-center">
                <div>Please wait</div> <ClipLoader size={15} />
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="login-privacy-text">
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice.
        </p>

        {/* Dynamic Divider Section */}
        <div className="login-divider">
          <h5>New to Amazon?</h5>
        </div>

        <button
          onClick={handleSignUp}
          className="login-register-btn"
          disabled={loading}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Auth;
