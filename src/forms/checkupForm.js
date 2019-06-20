import {sociodemographicData,
  pastHistoryData,
  complexionData,
  familyHistoryData,
 } from './helpers/FirstPage'
 import { COMPONENTS } from 'forms/helpers/FormUtils';


const initialization = (arr) => {
  return arr.map(field => {
    switch(field.type){
      case("text"):
        return{[field.name]: '' }
      case("select"):
      return{[field.name]: "Female"}
      case("number"):
      return{[field.name]: ''}
      case("checkbox"):
      return{[field.name]: false}
        default :
        return ;
    }
  });
}

const fill = (init) => {
  let values = init.reduce((result, field) => {
    result = Object.assign({}, result, field);
    return result;
  }, {})
  return values 
}
const sociodemographicLabel = {placeholder: "Sociodemographic data"};
const sociodemographicFields = [
  {component: COMPONENTS.label ,placeholder: "Sociodemographic data"},
  {
    name: "houseNumber",
    type: "number",
    req: false,
    placeholder:"House Number",
    component: COMPONENTS.input,
    key: 1,
  },
  {
    name: "patientName",
    type: "text",
    req: true,
    placeholder:"Patient's Name",
    component: COMPONENTS.input,
    key: 2,
  },
  {
    name: "gender",
    type: "select",
    req: true,
    placeholder:"Gender",
    component: COMPONENTS.radio,
    options: sociodemographicData.gender,
    key: 3,
  },
  {
    name: "age",
    type: "text",
    req: true,
    placeholder:"Patient's Age",
    component: COMPONENTS.input,
    key: 4,
  },
  {
    name: "occupation",
    type: "text",
    req: false,
    placeholder:"Occupation",
    component: COMPONENTS.input,
    key: 5,
  },
  {
    name: "maritalStatus",
    type: "select",
    req: true,
    placeholder:"Marital Status",
    component: COMPONENTS.radio,
    options: sociodemographicData.maritalStatus,
    key: 6,
  },
  {
    name: "childrenNumber",
    type: "number",
    req: false,
    placeholder:"Children Number",
    component: COMPONENTS.input,
    key: 7,
  },
  {
    name: "ageOYC",
    type: "text",
    req: true,
    placeholder:"Age of the youngest child",
    component: COMPONENTS.input,
    key: 8,
  },
  {
    name: "educationalLevel",
    type: "select",
    req: false,
    placeholder:"Educational Level",
    component: COMPONENTS.selectlist,
    options: sociodemographicData.educationalLevel,
    key: 9,
  },
  {
    name: "consangunity",
    type: "checkbox",
    req: true,
    placeholder:"onsangunity",
    component: COMPONENTS.checkbox,
    key: 10,
  },
  {
    name: "socioeconomicStatus",
    type: "select",
    req: true,
    placeholder:"Socioeconomic Status",
    component: COMPONENTS.radio,
    options: sociodemographicData.socioecnomicStatus,
    key: 11,
  },
  {
    name: "habitsOfMedicalImportance",
    type: "select",
    req: false,
    placeholder:"Habits of medical importance",
    component: "checklist",
    options: sociodemographicData.habitsofmedicalImporatance,
    key: 12,
  },
  {
    name: "rateOfSmoking",
    type: "text",
    req: false,
    placeholder:"Rate of smoking per day",
    component: COMPONENTS.input,
    key: 13,
  },
  {
    name: "durationOfSmokingCessation",
    type: "text",
    req: false,
    placeholder:"Duration of smoking cessation",
    component: COMPONENTS.input,
    key: 14,
  },
  {
    name: "telNumber",
    type: "number",
    req: false,
    placeholder:"Tel. number",
    component: COMPONENTS.input,
    key: 15,
  },
  {
    name: "mobNumber",
    type: "number",
    req: false,
    placeholder:"Mobile number",
    component: COMPONENTS.input,
    key: 16,
  },
  {
    name: "otherVillageName",
    type: "text",
    req: false,
    placeholder:"Other village name",
    component: COMPONENTS.input,
    key: 17,
  },

];
const init1 = initialization(sociodemographicFields);
const sociodemographicInitialValues = fill(init1)

const submit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
}

// export const sociodemographic = {
//   label: sociodemographicLabel,
//   fields: sociodemographicFields,
//   initialValues: sociodemographicInitialValues,
// }


const complaintLabel = "Complaint & present illness";
const complaintFields = [
  {component: COMPONENTS.label ,placeholder: "Complaint & present illness"},
  {
    name: "complaint",
    type: "text",
    req: false,
    placeholder:"Complaint",
    component: COMPONENTS.input,
    key: 1,
  },
  {
    name: "historyOfPresentIllness",
    type: "text",
    req: false,
    placeholder:"History of present illness",
    component: COMPONENTS.input,
    key: 1,
  },
];
const complaintInitTemp = initialization(complaintFields)
const complaintInit = fill(complaintInitTemp)

// export const complaint = {
//   label: complaintLabel,
//   fields: complaintFields,
//   initialValues: complaintInit,
// }

const pastHlabel = "Past history";
const pastHFields = [
  {component: COMPONENTS.label ,placeholder:"Past history"},
  {
    name: "medical",
    type: "select",
    req: false,
    placeholder:"Medical",
    component: COMPONENTS.selectlist,
    options: pastHistoryData.medical,
    key: 1,
  },
  {
    name: "drugsForChoronic",
    type: "text",
    req: false,
    placeholder:"Drugs for chronic diseases",
    component: COMPONENTS.checkbox,
    key: 2,
  },
  {
    name: "otherDrugs",
    type: "text",
    req: false,
    placeholder:"Other drugs",
    component: COMPONENTS.input,
    key: 3,
  },
  {
    name: "surgical",
    type: "select",
    req: false,
    placeholder:"Surgical",
    component: COMPONENTS.radio,
    options: pastHistoryData.surgical,
    key: 4,
  },
  {
    name: "operation",
    type: "text",
    req: false,
    placeholder:"Operation",
    component: COMPONENTS.input,
    key: 5,
  },
  {
    name: "bloodTransfusion",
    type: "checkbox",
    req: false,
    placeholder:"Blood transfusion",
    component: COMPONENTS.checkbox,
    key: 6,
  },
  {
    name: "durationOfBT",
    type: "text",
    req: false,
    placeholder:"Duration of blood transfusion",
    component: COMPONENTS.input,
    key: 7,
  },
  {
    name: "allergy",
    type: "checkbox",
    req: false,
    placeholder:"Allergy",
    component: COMPONENTS.checkbox,
    key: 8,
  },
  {
    name: "defineAllergy",
    type: "text",
    req: false,
    placeholder:"Define Allergy",
    component: COMPONENTS.input,
    key: 9,
  },  
]
const pastHInitTemp = initialization(pastHFields)
const pastHInit = fill(pastHInitTemp)

// export const pastHistory = {
//   label: pastHlabel,
//   fields: pastHFields,
//   initialValues: pastHInit,
// }

const familyHistoryFields = [
  {component: COMPONENTS.label ,placeholder:"Family history"},
  {
    name: "familyHistory",
    type: "select",
    req: false,
    placeholder:"Family History",
    component: COMPONENTS.radio,
    options: familyHistoryData.familyHistory,
    key: 1,
  },
]
const familyHistoryinit = [
  {
    "familyHistory": ""
  }
]
// export const familyHistory = {
//   label: "Family History",
//   fields: familyHistoryFields,
//   initialValues: familyHistoryinit,
// }

const vitalDataLabel = "Vital Data"
const vitalDataFields = [
  {component: COMPONENTS.label ,placeholder:"Vital data"},
  {
    name: "systolicBloodPressure",
    type: "text",
    req: false,
    placeholder:"systolic Blood Pressure (mmHg)",
    component: COMPONENTS.input,
    key: 1,
  },
  {
    name: "DiastolicBloodPressure",
    type: "text",
    req: false,
    placeholder:"Diastolic Blood Pressure (mmHg)",
    component: COMPONENTS.input,
    key: 2,
  },
  {
    name: "heartRate",
    type: "text",
    req: false,
    placeholder:"Heart rate (bpm)",
    component: COMPONENTS.input,
    key: 3,
  },
  {
    name: "Temperature",
    type: "number",
    req: false,
    placeholder:"Temperature",
    component: COMPONENTS.input,
    key: 4,
  },
] 
const vitalDataTemp = initialization(vitalDataFields)
const vitalDataInit = fill(vitalDataTemp)
// export const vitalData = {
//   label: vitalDataLabel,
//   fields: vitalDataFields,
//   initialValues: vitalDataInit
// }

const anthropometryLabel = "Anthropometry"
const anthropometryFields = [
  {component: COMPONENTS.label ,placeholder:"Anthropometry"},
  {
    name: "weight",
    type: "text",
    req: false,
    placeholder:"Weight(Kg)",
    component: COMPONENTS.input,
    key: 1,
  },
  {
    name: "height",
    type: "text",
    req: false,
    placeholder:"Height (cm)",
    component: COMPONENTS.input,
    key: 2,
  },
  {
    name: "bmi",
    type: "number",
    req: false,
    placeholder:"BMI",
    component: COMPONENTS.input,
    key: 3,
  },
] 
const anthropometryTemp = initialization(anthropometryFields)
const anthropometryInit = fill(anthropometryTemp)
// export const anthropometry = {
//   label: anthropometryLabel,
//   fields: anthropometryFields,
//   initialValues: anthropometryInit
// }


const complexionLabel = "Complexion"
const complexionFields = [
  {component: COMPONENTS.label ,placeholder:"Complexion"},
  {
    name: "complexion",
    type: "select",
    req: false,
    placeholder:"complexion",
    component: COMPONENTS.radio,
    options: complexionData.complexion,
    key: 1,
  },
  {
    name: "cyanosis",
    type: "select",
    req: false,
    placeholder:"Cyanosis",
    component: COMPONENTS.radio,
    options: complexionData.cyanosis,
    key: 2,
  },
  {
    name: "randomBloodSugar",
    type: "text",
    req: false,
    placeholder:"Random blood sugar",
    component: COMPONENTS.input,
    key: 3,
  },
  {
    name: "waistCircumference",
    type: "number",
    req: false,
    placeholder:"Waist circumference",
    component: COMPONENTS.input,
    key: 4,
  },
  {
    name: "hipCircumference",
    type: "number",
    req: false,
    placeholder:"Hip circumference",
    component: COMPONENTS.input,
    key: 5,
  },
  {
    name: "referralOfConvoyClincs",
    type: "select",
    req: false,
    placeholder:"Referral of convoy clincs",
    component: COMPONENTS.radio,
    options: complexionData.refferalofconvoyClinics,
    key: 6,
  },
  {
    name: "random",
    type: "checkbox",
    req: false,
    placeholder:"Random",
    component: COMPONENTS.checkbox,
    key: 7,
  },
  {
    name: "survays",
    type: "select",
    req: false,
    placeholder:"Referral of convoy clincs",
    component: COMPONENTS.radio,
    options: complexionData.refferalofconvoyClinics,
    key: 6,
  },
  
] 
const complexionTemp = initialization(complexionFields)
const complexionInit = fill(complexionTemp)
// export const complexion = {
//   label: complexionLabel,
//   fields: complexionFields,
//   initialValues: complexionInit
// }

const checkupFields = [
  ...sociodemographicFields,
  ...complaintFields,
  ...pastHFields,
  ...familyHistoryFields,
  ...vitalDataFields,
  ...anthropometryFields,
  ...complexionFields,
]
console.log("##########", checkupFields)
const checkupTemp = initialization(checkupFields)
let checkupInitialValues = fill(checkupTemp)
console.log("#################3 ", checkupInitialValues)
export const checkupData = {
  fields: checkupFields,
  initialValues: checkupInitialValues,
}