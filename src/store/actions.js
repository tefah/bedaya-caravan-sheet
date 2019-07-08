import {CHANGE_VALUE_IN_CHECKUP, 
  LOAD_DATA_For_CHECKUP, 
  CHANGE_VALUE_IN_CHECKUP2,
  LOAD_DATA_For_CHECKUP2,} from './actionTypes'


let baseURL = "";
export const seturl = (ip) =>{
  baseURL = `http://${ip}:3000/api/`;
}

export const changeValueCheckup = (field) => {
  return {
    type: CHANGE_VALUE_IN_CHECKUP,
    field,
  };
}

export const changeDataForCheckup = (data) => {
  return {
    type: LOAD_DATA_For_CHECKUP,
    data,
  };
}

export const changeValueCheckup2 = (field) => {
  return {
    type: CHANGE_VALUE_IN_CHECKUP2,
    field,
  };
}

export const changeDataForCheckup2 = (data) => {
  return {
    type: LOAD_DATA_For_CHECKUP2,
    data,
  };
}
// old specific data submission way

// export const submitCheckup = (checkup, onSuccessful, onError) => {
//   console.log("BASEURL", baseURL);
//   return dispatch => {
//     fetch(baseURL + "checkup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(checkup)
//     })
//     .catch(err => {onError(); return console.log(err)})
//     .then(res => res.json())
//     .then(jsonRes => {
//       console.log(jsonRes)
//       onSuccessful();
//       // here if you want to get data after finished
//     })
//   }
// }
// export const submitData = (data, path, onSuccessful, onError) => {
//   console.log("BASEURL", baseURL);
//   return dispatch => {
//     fetch(baseURL + "path", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(checkup)
//     })
//     .catch(err => {onError(); return console.log(err)})
//     .then(res => res.json())
//     .then(jsonRes => {
//       console.log(jsonRes)
//       onSuccessful();
//       // here if you want to get data after finished
//     })
//   }
// }