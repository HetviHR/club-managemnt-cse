import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert, Link } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect based on role
      if (user.role === "student") navigate("/student");
      else if (user.role === "faculty") navigate("/faculty");
      else if (user.role === "hod") navigate("/hod");
    } catch (err) {
      // If user does not exist, show a signup link
      if (err.response?.data?.message === "User not found") {
        setError("User does not exist. Please ");
      } else {
        setError(err.response?.data?.message || "Invalid email or password");
      }
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 12,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" mb={3}>
        Club Management Login
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
          {error === "User does not exist. Please " && (
            <Link href="/signuppage" underline="hover" sx={{ ml: 0.5 }}>
              sign up
            </Link>
          )}
        </Alert>
      )}

      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>

      <Typography variant="body2" align="center" mt={2}>
        Don’t have an account?{" "}
        <Link href="/signuppage" underline="hover">
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
