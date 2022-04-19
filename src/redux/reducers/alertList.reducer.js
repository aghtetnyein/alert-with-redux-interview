import { ADD_TO_ALERT_LIST, REMOVE_FROM_ALERT_LIST } from "../types";

function generateRandom(maxLimit = 100) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand); // 99
  return rand;
}

const alertReducer = (
  state = {
    items: [],
  },
  { type, payloads }
) => {
  switch (type) {
    case ADD_TO_ALERT_LIST:
      var already_exist_numbers = state.items.map((item) => item.alertId);
      var new_num = generateRandom();
      while (already_exist_numbers.includes(new_num)) {
        new_num = generateRandom();
      }

      const newItem = {
        alertId: payloads.newAlert.alertId || new_num,
        alertType: payloads.newAlert.alertType,
        alertTitle: payloads.newAlert.alertTitle,
        text: payloads.newAlert.text,
        timeLimit: payloads.newAlert.timeLimit || 3000,
        link: payloads.newAlert.link,
      };
      return {
        items: (state.items = [...state.items, newItem]),
      };
    case REMOVE_FROM_ALERT_LIST:
      return {
        items: (state.items = state.items.filter(
          (item) => item.alertId !== payloads.currentAlertId
        )),
      };
    default:
      return state;
  }
};

export default alertReducer;
