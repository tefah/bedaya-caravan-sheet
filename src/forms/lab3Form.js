import {bloodanalysisResults, microscopicExamination, 
  additionalTest} from './helpers/FourthandFifthPage'

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


const urineAnalysisResultFields = [
  {component: "label", placeholder: "Urine analysis result"},
  {
      name: "urineAnalysis",
      type: "checkbox",
      req: true,
      placeholder: "Urine analysis",
      component: "checkbox",
  }
]
const chemicalExaminationFields = [
  {component: "label", placeholder: "Chemical Examination"},
  {
      name: "glucose",
      type: "select",
      req: true,
      placeholder: "Glucose",
      component: "radio",
      options: bloodanalysisResults.glucose
  },
  {
      name: "glucoseCount",
      type: "text",
      req: false,
      placeholder: "Glucose count",
      component: "input",
  },
  {
      name: "protein",
      type: "select",
      req: true,
      placeholder: "protein",
      component: "radio",
      options: bloodanalysisResults.protien,
  },
  {
      name: "proteinCount",
      type: "text",
      req: false,
      placeholder: "protein count",
      component: "input",
  },
  {
      name: "phValue",
      type: "number",
      req: false,
      placeholder: "PH Value",
      component: "input",
  },
  {
      name: "phStatus",
      type: "select",
      req: true,
      placeholder: "PH status",
      component: "radio",
      options: bloodanalysisResults.phStatus,
  }
]
const microscopicExaminationFields = [
  {component: "label", placeholder: "Microscopic Examination"},
  {
      name: "rbcs",
      type: "select",
      req: true,
      placeholder: "RBCS",
      component: "radio",
      options: microscopicExamination.rbcs,
  },
  {
      name: "rbcs/hpf",
      type: "text",
      req: false,
      placeholder: "RBCS/HPF",
      component: "input",
  },
  {
      name: "pusCells",
      type: "select",
      req: true,
      placeholder: "Pus cells",
      component: "radio",
      options: microscopicExamination.pusCells,
  },
  {
      name: "pusCells/hpf",
      type: "text",
      req: false,
      placeholder: "Pus cells/HPF",
      component: "input",
  },
  {
      name: "epithelialCells",
      type: "select",
      req: true,
      placeholder: "Epithelial cells",
      component: "radio",
      options: microscopicExamination.epithelialCells,
  },
  {
      name: "epithelialCells/hpf",
      type: "text",
      req: false,
      placeholder: "Epithelial cells/HPF",
      component: "input",
  },
  {
      name: "casts",
      type: "select",
      req: true,
      placeholder: "Casts",
      component: "radio",
      options: microscopicExamination.casts,
  }, 
  {
      name: "casts/hpf",
      type: "text",
      req: false,
      placeholder: "Casts/HPF",
      component: "input",
  },
  {
      name: "uricAcidCrystals",
      type: "select",
      req: true,
      placeholder: "Uric acid crystals",
      component: "radio",
      options: microscopicExamination.uricacidCrystals,
  }, 
  {
      name: "calciumOxalateCrystals",
      type: "select",
      req: true,
      placeholder: "Calcium oxalate crystals",
      component: "radio",
      options: microscopicExamination.calciumoxalateCrystals,
  }, 
  {
      name: "triplePhosphateCrystals",
      type: "select",
      req: true,
      placeholder: "Triple phosphate crystals",
      component: "radio",
      options: microscopicExamination.triplephosphateCrystals,
  }, 
  {
      name: "amorphus",
      type: "select",
      req: true,
      placeholder: "Amorphus",
      component: "radio",
      options: microscopicExamination.amorphus,
  }, 
  {
      name: "eggs",
      type: "select",
      req: true,
      placeholder: "Eggs",
      component: "radio",
      options: microscopicExamination.eggs,
  }, 
  {
      name: "eggsCountType",
      type: "text",
      req: false,
      placeholder: "Eggs count&type",
      component: "input",
  },
  {
      name: "mucous",
      type: "select",
      req: true,
      placeholder: "Mucous",
      component: "radio",
      options: microscopicExamination.mucous,
  }, 
  {
      name: "bacteria",
      type: "select",
      req: true,
      placeholder: "Bacteria",
      component: "radio",
      options: microscopicExamination.bacteria,
  }, 
  {
      name: "yeast",
      type: "select",
      req: true,
      placeholder: "Yeast",
      component: "radio",
      options: microscopicExamination.yeast,
  }
]
const additionalTestsFields = [
  {component: "label", placeholder: "Additional tests"},
  {
      name: "microalbuminuria",
      type: "text",
      req: false,
      placeholder: "Microalbuminuria",
      component: "input",
  },
  {
      name: "pregnancyTest",
      type: "select",
      req: true,
      placeholder: "Pregnancy test",
      component: "radio",
      options: additionalTest.pregnancyTest
  },
  {
      name: "additionalComment",
      type: "text",
      req: false,
      placeholder: "Additional comment",
      component: "input",
  }
]


const lab3Fields = [
  ...urineAnalysisResultFields,
  ...chemicalExaminationFields,
  ...microscopicExaminationFields,
  ...additionalTestsFields,
]

console.log("##########", lab3Fields)
  const lab3Temp = initialization(lab3Fields)
  let lab3InitialValues = fill(lab3Temp)
  console.log("#################3 ", lab3InitialValues)
  export const lab3Data = {
    fields: lab3Fields,
    initialValues: lab3InitialValues,
  }