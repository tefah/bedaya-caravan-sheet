let   baseURL = `http://192.168.1.100:3001/api/`;

export const setIP = (ip) =>{
  baseURL = `http://${ip}:3001/api/`;
}

export const submitData = (data, path, onSuccessful, onError) => {
  // console.log("BASEURL", baseURL);
  console.log("DATA", data);

  return dispatch => {
    fetch(`${baseURL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(jsonRes => {
      console.log(jsonRes)
      onSuccessful();
      // here if you want to get data after finished
    })
    .catch(err => {onError(); return console.log("ERROR", err)})

  }
}