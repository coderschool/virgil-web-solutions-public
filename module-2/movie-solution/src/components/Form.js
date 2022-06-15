import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FormProvider, FTextField, FCheckBox } from "./form/index.js";
import { useAuth } from "../contexts/AuthContext";

export default function Form() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/";
  function onDismiss() {
    navigate(-1);
  }
  const defaultValues = {
    email: "naruto@cs.vn",
    password: "konoha",
    remember: true,
  };
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    // setError,
    // control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    auth.signin(data.email, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.

      navigate(from, { replace: true });
    });
  };
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onBackdropClick={() => onDismiss()}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem",
        outline: "0",
      }}
    >
      <Box>
        <Paper
          elevation={8}
          style={{
            borderRadius: "20px",
          }}
        >
          <div style={{ padding: "3rem" }}>
            <Typography
              color="secondary"
              variant="h3"
              textAlign="center"
              mb={3}
            >
              Log in
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} xs={3}>
                {!!errors.afterSubmit && (
                  <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}
                <FTextField name="email" label="Email address" />
                <FTextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          color="secondary"
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack>
                <FCheckBox name="remember" label="Remember me" />
              </Stack>
              <Stack>
                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  loading={isSubmitting}
                >
                  Login
                </LoadingButton>
              </Stack>
            </FormProvider>
          </div>
        </Paper>
      </Box>
    </Modal>
  );
}
