
import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemedTitle } from "@refinedev/mui";

import { yariga } from "../assets";
import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = () => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (
        typeof window === "undefined" ||
        !window.google ||
        !divRef.current
      ) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });

        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.error("Google login initialization failed:", error);
      }
    }, [login]);

    return <div ref={divRef} />;
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FCFCFC",
        padding: 0,
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemedTitle collapsed={false} />

          <Box mt={4}>
            <img
              src={yariga}
              alt="Yariga logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
