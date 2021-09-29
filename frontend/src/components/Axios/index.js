import axios from "axios";
import { config } from "../../config";

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const push = (self, path) => {
  self.props.history.push(path);
}

function getRequest(self, url, result, error_message, onFinal, debug = false) {
  try {
    axios.get(url, {
      httpsAgent: agent,
    })
      .then(response => {
        return JSON.parse(response.request.responseText);
      })
      .then(hasil => {
        if (debug) {
          console.log(url, hasil);
        }
        if (hasil.success) {
          result(hasil);
        } else {
          error_message(hasil.message);
        }
      })
      .catch(error => {
        if (error.message === "Network Error") {
          console.log(error.message);
          if (self) {
            // console.log(self); // debug
            try {
              push(self, config.routes_frontend.networkerror);
            } catch (error) {
              if (String(error).includes("TypeError")) {
                console.log("push....")
                window.location.href = config.routes_frontend.networkerror;
              } else {
                console.log("Error:", error)
                console.log("Stack:", error.stack);
              }
            }
          }
        } else {
          error_message(error.message);
        }
      })
      .finally(() => {
        onFinal();
      });
  } catch (error) {
    console.log("Error:", error)
    console.log("Stack:", error.stack);
  }

}

function postRequest(self, url, data_object, result, error_message, onFinal, debug = false) {
  const keys = Object.keys(data_object);
  const values = Object.values(data_object);

  const data = new FormData();
  if (localStorage.getItem("no_wa")) {
    data.append("no_wa", localStorage.getItem("no_wa"));
  }
  if (localStorage.getItem("password")) {
    data.append("password", localStorage.getItem("password"));
  }
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];
    data.append(key, value);
  }

  try {
    axios.post(url, data, {
      httpsAgent: agent,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(response => {
        return JSON.parse(response.request.responseText);
      })
      .then(hasil => {
        if (debug) {
          console.log(url, hasil);
        }
        if (hasil.success) {
          result(hasil);
        } else {
          console.log(hasil.message);
          error_message(hasil.message);
        }
      })
      .catch(error => {
        if (error.message === "Network Error") {
          console.log(error.message);
          if (self) {
            console.log(self); // debug
            try {
              push(self, config.routes_frontend.networkerror);
            } catch (error) {
              if (String(error).includes("TypeError")) {
                console.log("harus tetap push....")
                window.location.href = config.routes_frontend.networkerror;
              } else {
                console.log("Error:", error)
                console.log("Stack:", error.stack);
              }
            }
          }
        } else {
          error_message(error.message, error);
        }
      })
      .finally(() => {
        onFinal();
      });
  } catch (error) {
    console.log("Error:", error)
    console.log("Stack:", error.stack);
  }
}

export {
  getRequest,
  postRequest,
}