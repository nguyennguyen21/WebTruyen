// src/utils/AuthUpdater.jsx

import React, { useEffect } from "react";
import { updateHeaderAfterLogin,updateMobileMenu } from "../../utils/HeaderUpdate";

const AuthUpdater = () => {
  useEffect(() => {
    const initializeHeader = () => {
      const token = localStorage.getItem("token");
      if (token) {
        updateHeaderAfterLogin();
        updateMobileMenu();
      }
    };

    initializeHeader();

    window.addEventListener("storage", initializeHeader);
    return () => {
      window.removeEventListener("storage", initializeHeader);
    };
  }, []);

  return null; // Không render gì
};

export default AuthUpdater;