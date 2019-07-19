import ls from 'local-storage'
let   baseURL = `http://${ls.get('ip')}:3001/api/`;

export const setIP = (ip) =>{
  baseURL = `http://${ip}:3001/api/`;
  ls.set('ip', ip)
}

export const submitData = (data, path, onSuccessful, onError) => {
  console.log("BASEURL", baseURL, path);
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

export const getData = ( path, onSuccessful, onError) => {
  // console.log("BASEURL", baseURL);
  // console.log("PATIENT_ID", patientID);

  return dispatch => {
    fetch(`${baseURL}${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(jsonRes => {
      // console.log("JSON RESPONSE$$$$##$$%%%%% ", jsonRes)
        onSuccessful(jsonRes);
    })
    .catch(err => {onError(err); return console.log("ERROR", err)})
  }
}

export const deletePatient = ( patientID, path, onSuccessful, onError) => {
  // console.log("BASEURL", baseURL);
  // console.log("PATIENT_ID", patientID);

  return dispatch => {
    fetch(`${baseURL}${path}/${patientID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(jsonRes => {
      getData(path, onSuccessful, onError)
      // console.log("JSON RESPONSE$$$$##$$%%%%% ", jsonRes)
        // onSuccessful(jsonRes);
    })
    .catch(err => {onError(err); return console.log("ERROR", err)})
  }
}

export const extractCSV = (onSuccessful, onError) => {
  // console.log("BASEURL", baseURL);
  // console.log("PATIENT_ID", patientID);

  return dispatch => {
    fetch(`${baseURL}extractcsv`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(jsonRes => {
      // console.log("JSON RESPONSE$$$$##$$%%%%% ", jsonRes)
        onSuccessful(jsonRes);
    })
    .catch(err => {onError(err); return console.log("ERROR", err)})
  }
}

export const resetState = (data) => {
  return {
    type: 'reset',
    data, 
  };
}
