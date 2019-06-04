import {sociodemographicData,
  pastHistory, 
 } from './helpers/FirstPage'


const initialization = (arr) => {
  return arr.map(field => {
    switch(field.type){
      case("text"):
        return{[field.name]: '' }
      case("select"):
      return{[field.name]: null}
      case("number"):
      return{[field.name]: ''}
      case("checkbox"):
      return{[field.name]: false}
        default :
        return {};
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
const sociodemographicLabel = "Sociodemographic data";
const sociodemographicFields = [
  {
    name: "houseNumber",
    type: "number",
    req: false,
    placeholder:"House Number",
    component: "input",
    key: 1,
  },
  {
    name: "patientName",
    type: "text",
    req: true,
    placeholder:"Patient's Name",
    component: "input",
    key: 2,
  },
  {
    name: "gender",
    type: "select",
    req: true,
    placeholder:"Gender",
    component: "radio",
    options: sociodemographicData.gender,
    key: 3,
  },
  {
    name: "age",
    type: "text",
    req: true,
    placeholder:"Patient's Age",
    component: "input",
    key: 4,
  },
  {
    name: "occupation",
    type: "text",
    req: false,
    placeholder:"Occupation",
    component: "input",
    key: 5,
  },
  {
    name: "maritalStatus",
    type: "select",
    req: true,
    placeholder:"Marital Status",
    component: "radio",
    options: sociodemographicData.maritalStatus,
    key: 6,
  },
  {
    name: "childrenNumber",
    type: "number",
    req: false,
    placeholder:"Children Number",
    component: "input",
    key: 7,
  },
  {
    name: "ageOYC",
    type: "text",
    req: true,
    placeholder:"Age of the youngest child",
    component: "input",
    key: 8,
  },
  {
    name: "educationalLevel",
    type: "select",
    req: false,
    placeholder:"Educational Level",
    component: "selectlist",
    options: sociodemographicData.educationalLevel,
    key: 9,
  },
  {
    name: "consangunity",
    type: "checkbox",
    req: true,
    placeholder:"onsangunity",
    component: "checkbox",
    key: 10,
  },
  {
    name: "socioeconomicStatus",
    type: "select",
    req: true,
    placeholder:"Socioeconomic Status",
    component: "radio",
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
    component: "input",
    key: 13,
  },
  {
    name: "durationOfSmokingCessation",
    type: "text",
    req: false,
    placeholder:"Duration of smoking cessation",
    component: "input",
    key: 14,
  },
  {
    name: "telNumber",
    type: "number",
    req: false,
    placeholder:"Tel. number",
    component: "input",
    key: 15,
  },
  {
    name: "mobNumber",
    type: "number",
    req: false,
    placeholder:"Mobile number",
    component: "input",
    key: 16,
  },
  {
    name: "otherVillageName",
    type: "text",
    req: false,
    placeholder:"Other village name",
    component: "input",
    key: 17,
  },

];
const init1 = initialization(sociodemographicFields);
const sociodemographicInitialValues = fill(init1)

const submit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
}
export const sociodemographic = {
  label: sociodemographicLabel,
  fields: sociodemographicFields,
  initialValues: sociodemographicInitialValues,
}
const complaintLabel = "Complaint & present illness";
const complaintFields = [
  {
    name: "complaint",
    type: "text",
    req: false,
    placeholder:"Complaint",
    component: "input",
    key: 1,
  },
  {
    name: "historyOfPresentIllness",
    type: "text",
    req: false,
    placeholder:"History of present illness",
    component: "input",
    key: 1,
  },
];
const complaintInitTemp = initialization(complaintFields)
const complaintInit = fill(complaintInitTemp)


const pastHlabel = "Past history label";
const pastHFields = [
  {
    name: "medical",
    type: "select",
    req: false,
    placeholder:"Medical",
    component: "selectlist",
    options: pastHistory.medical,
    key: 1,
  },
  {
    name: "drugsForChoronic",
    type: "text",
    req: false,
    placeholder:"Drugs for chronic diseases",
    component: "checkbox",
    key: 2,
  },
  {
    name: "otherDrugs",
    type: "text",
    req: false,
    placeholder:"Other drugs",
    component: "input",
    key: 3,
  },
  {
    name: "surgical",
    type: "select",
    req: false,
    placeholder:"Surgical",
    component: "radio",
    options: pastHistory.surgical,
    key: 4,
  },
  {
    name: "operation",
    type: "text",
    req: false,
    placeholder:"Operation",
    component: "input",
    key: 5,
  },
  {
    name: "bloodTransfusion",
    type: "checkbox",
    req: false,
    placeholder:"Blood transfusion",
    component: "checkbox",
    key: 6,
  },
  {
    name: "durationOfBT",
    type: "text",
    req: false,
    placeholder:"Duration of blood transfusion",
    component: "input",
    key: 7,
  },
  {
    name: "allergy",
    type: "checkbox",
    req: false,
    placeholder:"Allergy",
    component: "checkbox",
    key: 8,
  },
  {
    name: "defineAllergy",
    type: "text",
    req: false,
    placeholder:"Define Allergy",
    component: "input",
    key: 9,
  },  
]
const pastHInitTemp = initialization(pastHFields)
const pastHInit = fill(pastHFields)
