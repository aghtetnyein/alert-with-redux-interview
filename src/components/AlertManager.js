import React from "react";
import { useSelector } from "react-redux";

// mui components

// components
import AlertComponent from "./AlertComponent";

const AlertManager = () => {
  // instance
  const alertList = useSelector((state) => state.alertList.items);

  return (
    <>
      {alertList.map((item, index) => (
        <div key={index}>
          <AlertComponent
            alertId={item.alertId}
            type={item.alertType}
            title={item.alertTitle}
            body={item.text}
            timeLimit={item.timeLimit}
            link={item.link}
          />
        </div>
      ))}
    </>
  );
};

export default AlertManager;
