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
    .then(res => {
      if(res.status === 200)
        return res.json()
      else{
        throw (res)
      }
    })
    .then(jsonRes => {
      onSuccessful()
    })
    .catch(err => {onError(err); return console.log("ERROR", err)})

  }
}

export const getSingleData = (patientID, path, onSuccessful, onError) => {
  // console.log("BASEURL", baseURL);
  console.log("PATIENT_ID", patientID);

  return dispatch => {
    fetch(`${baseURL}${path}/${patientID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(jsonRes => {
      // console.log("JSON RESPONSE$$$$##$$%%%%% ", jsonRes)
        onSuccessful(jsonRes[0]);
    })
    .catch(err => {onError(err); return console.log("ERROR", err)})
  }
}
export const updateData = (patientID, data, path, onSuccessful, onError) => {
  // console.log("BASEURL", baseURL);
  // console.log("PATIENT_ID", patientID);

  return dispatch => {
    fetch(`${baseURL}${path}/${patientID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.status === 200)
        return res.json()
      else{
        throw (res)
      }
    })
    .then(jsonRes => {
      onSuccessful()
    })
    .catch(err => {onError(err); return console.log("ERROR", err)})
  }
}