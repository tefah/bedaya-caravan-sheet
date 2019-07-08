import {requestedInvestigations} from './helpers/ThirdPage'

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

const lab1Fields = [
  {component: "label", placeholder: "Requested investigations"},
  {
      name: "urineExamination",
      type: "select",
      req: true,
      placeholder: "Urine Examination",
      component: "checklist",
      options: requestedInvestigations.urineExamination
  },
  {
      name: "stoolExamination",
      type: "select",
      req: true,
      placeholder: "Stool Examination",
      component: "checklist",
      options: requestedInvestigations.stoolExamination,
  },
  {
      name: "bloodExamination",
      type: "select",
      req: true,
      placeholder: "Blood Examination",
      component: "checklist",
      options: requestedInvestigations.bloodExamination,
  },
  {
      name: "clinics",
      type: "select",
      req: true,
      placeholder: "Clinics",
      component: "checklist",
      options: requestedInvestigations.clinics,
  },
  {
      name: "ecgComment",
      type: "text",
      req: false,
      placeholder: "ECG comment",
      component: "input",
  }
]

console.log("##########", lab1Fields)
  const lab1Temp = initialization(lab1Fields)
  let lab1InitialValues = fill(lab1Temp)
  console.log("#################3 ", lab1InitialValues)
  export const lab1Data = {
    fields: lab1Fields,
    initialValues: lab1InitialValues,
  }