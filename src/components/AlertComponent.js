import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// mui components
import { Alert, AlertTitle, IconButton, Link } from "@mui/material";

// icons
import CloseIcon from "@mui/icons-material/Close";

const AlertComponent = ({ alertId, type, title, body, timeLimit, link }) => {
  // instances
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_ALERT_LIST",
        payloads: {
          currentAlertId: alertId,
        },
      });
    }, timeLimit);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // functions
  const closeAlert = (event) => {
    event.preventDefault();
    dispatch({
      type: "REMOVE_FROM_ALERT_LIST",
      payloads: {
        currentAlertId: alertId,
      },
    });
  };

  return (
    <Link href={link} underline={"none"} target="_blank">
      <Alert
        variant="filled"
        severity={type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={closeAlert}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 1 }}
      >
        <AlertTitle sx={{ textTransform: "capitalize" }}>{title}</AlertTitle>
        {body}
      </Alert>
    </Link>
  );
};

export default AlertComponent;
