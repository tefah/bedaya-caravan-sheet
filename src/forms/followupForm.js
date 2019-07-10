
const initialization = (arr) => {
  return arr.map(field => {
    switch(field.type){
      case("text"):
        return{[field.name]: '' }
      case("select"):
      return{[field.name]: field.options[0]}
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

const followupFields = [
  {component: "label", placeholder: "Follow up"},
  {
      name: "idNumber",
      type: "number",
      req: false,
      placeholder: "ID Number",
      component: "input",
  },
  {
    name: "motherName",
    type: "text",
    req: false,
    placeholder: "Mother name",
    component: "input",
},
{
  name: "diagnosis",
  type: "text",
  req: false,
  placeholder: "Diagnosis",
  component: "input",
},
{
  name: "furtherInvestigation",
  type: "text",
  req: false,
  placeholder: "Further investigations",
  component: "input",
},
{
  name: "furtherTreatment",
  type: "number",
  req: false,
  placeholder: "Further treatment",
  component: "input",
},
]

console.log("##########", followupFields)
  const followupTemp = initialization(followupFields)
  let followupInitialValues = fill(followupTemp)
  console.log("#################3 ", followupInitialValues)
  export const followupData = {
    fields: followupFields,
    initialValues: followupInitialValues,
  }