import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./Admin.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";
import LoginB from "../../components/LoginB/LoginB";
import LogoutB from "../../components/LogoutB/LogoutB";
import Profile from "../../components/Profile/Profile";

function Admin() {
  const { user, isAuthenticated } = useAuth0();
  const validEmails = [
    "santigugon@gmail.com",
    "sebastiancerveramaltos@gmail.com",
  ];
  if (!isAuthenticated) {
    // Redirect user to login page or show a login button
    return (
      <div className="admin-login-prompt">
        <LoginB />
        <h1>You must be logged in to view this page.</h1>
      </div>
    );
  }
  if (!validEmails.includes(user.email)) {
    return (
      <div className="admin-login-prompt">
        <h1>You are not authorized to view this page.</h1>
        <LogoutB />
      </div>
    );
  }
  return (
    <div className="admin">
      <h1>Welcome to the Admin Panel</h1>
      <Sidebar />
      <Routes>
    
      </Routes>
      <LogoutB />
      <Profile />
    </div>
  );
}

export default Admin;
