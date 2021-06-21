import axios from "axios";


const getScriptValue = async (setInputFields, serverName, alertName, token) => {
    try {
      const resp = await axios({
        method: "POST",
        url: `http://localhost:3001/script/`,
        data: {
          alertName,
          serverName,
        },
        headers: {
          "x-auth-token": token,
        },
      });
      const values = [];
      resp.data.forEach(function (scriptRow) {
        values.push({ script: scriptRow.scriptFile });
      });
      if(values.length)
        setInputFields(values);
      else{
        setInputFields([
          { script: "" },
          { script: "" },
          { script: "" },
          { script: "" },
          { script: "" },
        ]);
      }
    } catch (err) {
      console.error(err);
    }
  };

const sendScriptValue = async (SetSending,setApiError,setSuccess,data,token) => {
    SetSending(true);
    setApiError(false);
    try {
      const resp = await axios({
        method: "POST",
        url: `http://localhost:3001/script/many`,
        //url: "https://jsonplaceholder.typicode.com/posts", //fake api
        data, 
        headers: {
          "x-auth-token": token,
        },
      });
      console.log(resp.data);
      setSuccess(true);
    } catch (err) {
      if (err) setApiError(true);
      console.error(err);
    }
    SetSending(false);
  };

  export {getScriptValue,sendScriptValue} ;