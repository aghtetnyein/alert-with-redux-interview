import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

// mui components
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

// icons
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function AlertExampleForm({ createNewAlert }) {
  // instances
  const dispatch = useDispatch();
  // states
  const [alertType, setAlertType] = React.useState("success");

  const validationSchema = Yup.object().shape({
    // alertId: Yup.number("ID must be a number").typeError("ID must be a number"),
    // alertTitle: Yup.string("Title must be a string").required(
    //   "Alert Title is required"
    // ),
    // text: Yup.string("Text must be a string").required("Text is required"),
    // timeLimit: Yup.number("Time Limit must be a number").typeError(
    //   "Time Limit must be a number"
    // ),
    // link: Yup.string("Link must be a string"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const newAlert = { ...data, alertType };

    dispatch({
      type: "ADD_TO_ALERT_LIST",
      payloads: {
        newAlert: newAlert,
      },
    });
  };

  return (
    <Container>
      <CssBaseline />
      <Box
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <NotificationsActiveIcon />
        </Avatar>

        <Typography component="h1" variant="body1" sx={{ fontWeight: "500" }}>
          .ALERTS.
        </Typography>

        <Box sx={{ mt: 3, width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="filled"
                id="alertId"
                name="alertId"
                label="ID"
                type={"number"}
                {...register("alertId")}
                error={errors.alertId ? true : false}
                autoFocus
              />
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {errors.alertId?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="alertType">Alert Type</InputLabel>
                <Select
                  labelId="alertType"
                  id="alertType"
                  name="alertType"
                  value={alertType}
                  label="Alert Type"
                  onChange={(e) => {
                    setAlertType(e.target.value);
                  }}
                >
                  <MenuItem value={"info"}>Info</MenuItem>
                  <MenuItem value={"success"}>Success</MenuItem>
                  <MenuItem value={"warning"}>Warning</MenuItem>
                  <MenuItem value={"error"}>Error</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="alertTitle"
                variant="filled"
                fullWidth
                id="alertTitle"
                label="Title"
                {...register("alertTitle")}
                error={errors.alertTitle ? true : false}
              />
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {errors.alertTitle?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="timeLimit"
                variant="filled"
                fullWidth
                id="timeLimit"
                label="Time Limit (in seconds)"
                type={"number"}
                {...register("timeLimit")}
                error={errors.timeLimit ? true : false}
              />
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {errors.timeLimit?.message}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="text"
                variant="filled"
                fullWidth
                id="text"
                label="Text"
                multiline
                rows={3}
                {...register("text")}
                error={errors.text ? true : false}
              />
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {errors.text?.message}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="link"
                variant="filled"
                fullWidth
                id="link"
                label="Link"
                {...register("link")}
                error={errors.link ? true : false}
              />
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {errors.link?.message}
              </Typography>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit(onSubmit)}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Create new alert
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
