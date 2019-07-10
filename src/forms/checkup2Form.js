// import { COMPONENTS } from 'forms/helpers/FormUtils';


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

const gynobshistoryFields = [
    {component: "label" ,placeholder : "Gyn&Obs History"},
    {
        name: "menarche",
        type: "text",
        req: false,
        placeholder: "Menarche",
        component: "input",
    },
    {
        name: "rhythm",
        type: "text",
        req: false,
        placeholder: "Rhythm",
        component: "input",
    },
    {
        name: "duration",
        type: "text",
        req: false,
        placeholder: "Duration",
        component: "input",
    },
    {
        name: "cycle",
        type: "text",
        req: false,
        placeholder: "Cycle",
        component: "input",
    },
    {
        name: "amount",
        type: "text",
        req: false,
        placeholder: "Amount",
        component: "input",
    },
    {
        name: "associatedSymptoms",
        type: "text",
        req: false,
        placeholder: "Associated symptoms",
        component: "input",
    },
    {
        name: "lmp",
        type: "text",
        req: false,
        placeholder: "LMP",
        component: "input",
    }
]
const ifPregnantFields = [
    { component: "label", placeholder: "If Pregnent"},
    {
        name: "edd",
        type: "text",
        req: false,
        placeholder: "EDD",
        component: "input",
    },
    {
        name: "ega",
        type: "text",
        req: false,
        placeholder: "EGA",
        component: "input",
    }
]
const contraceptiveHistoryFields = [
    { component: "label", placeholder: "Contraceptive history"},
    {
        name: "method",
        type: "text",
        req: false,
        placeholder: "Method",
        component: "input",
    },
    {
        name: "start",
        type: "text",
        req: false,
        placeholder: "Start",
        component: "input",
    },
    {
        name: "duration",
        type: "text",
        req: false,
        placeholder: "Duration",
        component: "input",
    },
    {
        name: "causeOfStoppage",
        type: "text",
        req: false,
        placeholder: "Cause of stoppage",
        component: "input",
    }
]
const obstetricHistoryFields = [
    {component: "label", placeholder: "Obstetric history"},
    {
        name: "code",
        type: "text",
        req: false,
        placeholder: "Code",
        component: "input",
    },
    {
        name: "numOfPregnancies",
        type: "text",
        req: false,
        placeholder: "Num. of pregnancies",
        component: "input",
    },
    {
        name: "numOfDeliveries",
        type: "text",
        req: false,
        placeholder: "Num. of deliveries",
        component: "input",
    },
    {
        name: "numOfMiscarriageAbortion",
        type: "text",
        req: false,
        placeholder: "Num. of miscarriage/abortion",
        component: "input",
    },
    {
        name: "dateOfPregnancy",
        type: "text",
        req: false,
        placeholder: "Date of pregnancy",
        component: "input",
    },
    {
        name: "pot",
        type: "text",
        req: false,
        placeholder: "POT",
        component: "input",
    },
    {
        name: "delivery",
        type: "text",
        req: false,
        placeholder: "Delivery",
        component: "input",
    },
    {
        name: "postpartumComplications",
        type: "text",
        req: false,
        placeholder: "PostPartum complications",
        component: "input",
    },
    {
        name: "outcome",
        type: "text",
        req: false,
        placeholder: "Outcome",
        component: "input",
    },
    {
        name: "anp",
        type: "text",
        req: false,
        placeholder: "ANP",
        component: "input",
    }
]
const ifTopFields = [
    {component: "label", placeholder: "If,TOP"},
    {
        name: "type",
        type: "select",
        req: true,
        placeholder: "Type",
        component: "radio",
        options:['Abortion', 'VM', 'Ectopic']
    },
    {
        name: "modeOfTermination",
        type: "text",
        req: false,
        placeholder: "Mode of termination",
        component: "input",
    },
    {
        name: "postabortionComplicants",
        type: "text",
        req: false,
        placeholder: "Post-abortion complicants",
        component: "input",
    },
    {
        name: "cause",
        type: "text",
        req: false,
        placeholder: "Cause",
        component: "input",
    },
]

const checkup2Fields = [
    ...gynobshistoryFields,
    ...ifPregnantFields,
    ...contraceptiveHistoryFields,
    ...obstetricHistoryFields,
    ...ifTopFields,
  ]
  console.log("##########", checkup2Fields)
  const checkup2Temp = initialization(checkup2Fields)
  let checkup2InitialValues = fill(checkup2Temp)
  console.log("#################3 ", checkup2InitialValues)
  export const checkup2Data = {
    fields: checkup2Fields,
    initialValues: checkup2InitialValues,
  }