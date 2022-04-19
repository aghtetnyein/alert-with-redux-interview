import React from "react";

// mui components
import { Container, Box } from "@mui/material";

// components
import AlertExampleForm from "./components/AlertExampleForm";
import AlertManager from "./components/AlertManager";

const App = () => {
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AlertExampleForm />
      <Box sx={{ my: 2, position: "absolute", top: 2, right: 16 }}>
        <AlertManager />
      </Box>
    </Container>
  );
};

export default App;
