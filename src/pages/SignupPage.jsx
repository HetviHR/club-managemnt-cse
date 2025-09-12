import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert, MenuItem, Link } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // 1️⃣ Attempt to register the user
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      // 2️⃣ Immediately log them in
      const loginResponse = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const user = loginResponse.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      // 3️⃣ Redirect to dashboard based on role
      if (user.role === "student") navigate("/student");
      else if (user.role === "faculty") navigate("/faculty");
      else if (user.role === "hod") navigate("/hod");

    } catch (err) {
      // If user already exists, show a message with login link
      if (err.response?.data?.message === "User already exists") {
        setError("User already exists. Please ");
      } else {
        setError(err.response?.data?.message || "Registration failed");
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
        Club Management System
        <h1>Sign up</h1>
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error} 
          {error === "User already exists. Please " && (
            <Link href="/login" underline="hover" sx={{ ml: 0.5 }}>
              login
            </Link>
          )}
        </Alert>
      )}

      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <form onSubmit={handleSignUp}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Sign Up
        </Button>
      </form>

      <Typography variant="body2" align="center" mt={2}>
        Already have an account?{" "}
        <Link href="/login" underline="hover">
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
