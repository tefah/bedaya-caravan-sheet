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


const bloodAnalysisResultFields = [
  {component: "label", placeholder: "Blood analysis result"},
  {
      name: "Blood analysis",
      type: "checkbox",
      req: true,
      placeholder: "Blood analysis",
      component: "checkbox",
  }
]
const cbcFields = [
  {component: "label", placeholder: "CBC"},
  {
      name: "wbcs",
      type: "text",
      req: false,
      placeholder: "WBCS",
      component: "input",
  },
  {
      name: "hgb",
      type: "number",
      req: false,
      placeholder: "HGB",
      component: "input",
  },
  {
      name: "mch",
      type: "number",
      req: false,
      placeholder: "MCH",
      component: "input",
  },
  {
      name: "mchc",
      type: "number",
      req: false,
      placeholder: "MCHC",
      component: "input",
  },
  {
      name: "plt",
      type: "text",
      req: false,
      placeholder: "PLT",
      component: "input",
  },
  {
      name: "high",
      type: "select",
      req: false,
      placeholder: "High",
      component: "checklist",
      options: []
  },
  {
      name: "low",
      type: "select",
      req: false,
      placeholder: "LOW",
      component: "checklist",
      options: []
  },
  {
      name: "esr(mm/hr)",
      type: "number",
      req: false,
      placeholder: "ESR(mm/hr)",
      component: "input",
  }
]
const liverFunctionsFields = [
  {component: "label", placeholder: "Liver functions"},
  {
      name: "alt(gpt)u/l",
      type: "number",
      req: false,
      placeholder: "ALT(GPT)U/L",
      component: "input",
  },
  {
      name: "ast(got)u/l",
      type: "number",
      req: false,
      placeholder: "AST(GOT)U/L",
      component: "input",
  },
  {
      name: "alkalinePhosphataseU/l",
      type: "number",
      req: false,
      placeholder: "Alkaline phosphatase U/L",
      component: "input",
  },
  {
      name: "albuminG/dl",
      type: "number",
      req: false,
      placeholder: "Albumin g/dl",
      component: "input",
  },
  {
      name: "totalBilirubinMg/dl",
      type: "number",
      req: false,
      placeholder: "Total bilirubin mg/dl",
      component: "input",
  },
  {
      name: "directBilirubinMg/dl",
      type: "number",
      req: false,
      placeholder: "Direct bilirubin mg/dl",
      component: "input",
  }
]
const ptFields = [
  {component: "label", placeholder: "PT"},
  {
      name: "inr",
      type: "number",
      req: false,
      placeholder: "INR",
      component: "input",
  },
  {
      name: "time(sec)",
      type: "text",
      req: false,
      placeholder: "Time(sec)",
      component: "input",
  },
  {
      name: "%",
      type: "text",
      req: false,
      placeholder: "%",
      component: "input",
  },
  {
      name: "ptt(sec)",
      type: "text",
      req: false,
      placeholder: "PTT(sec)",
      component: "input",
  }
]
const kidneyFunctionsFields = [
  {component: "label", placeholder: "Kidney functions"},
  {
      name: "craetinineMg/dl",
      type: "number",
      req: false,
      placeholder: "Craetinine mg/dl",
      component: "input",
  },
  {
      name: "ureaMg/dl",
      type: "number",
      req: false,
      placeholder: "Urea mg/dl",
      component: "input",
  },
  {
      name: "uricAcidMg/dl",
      type: "number",
      req: false,
      placeholder: "Uric Acid mg/dl",
      component: "input",
  }
]
const ionsFields = [
  {component: "label", placeholder: "Ions"},
  {
      name: "k+",
      type: "number",
      req: false,
      placeholder: "K+",
      component: "input",
  },
  {
      name: "ca++(meq/l)",
      type: "number",
      req: false,
      placeholder: "Ca++(mEq/L)",
      component: "input",
  },
  {
      name: "na+(meq/l)",
      type: "number",
      req: false,
      placeholder: "Na+(mEq/L)",
      component: "input",
  }
]
const glucoseFields = [
  {component: "label", placeholder: "Glucose"},
  {
      name: "randomBloodSugar(mg/dl)",
      type: "text",
      req: false,
      placeholder: "Random blood sugar (mg/dl)",
      component: "input",
  },
  {
      name: "fastingBloodSugar(mg/dl)",
      type: "text",
      req: false,
      placeholder: "Fasting blood sugar (mg/dl)",
      component: "input",
  },
  {
      name: "postprandialBloodSugar(mg/dl)",
      type: "text",
      req: false,
      placeholder: "Postprandial blood sugar (mg/dl)",
      component: "input",
  }
]
const othersFields = [
  {component: "label", placeholder: "Others"},
  {
      name: "hbv",
      type: "text",
      req: false,
      placeholder: "HBV",
      component: "input",
  },
  {
      name: "psa",
      type: "text",
      req: false,
      placeholder: "PSA",
      component: "input",
  },
  {
      name: "hcv",
      type: "text",
      req: false,
      placeholder: "HCV",
      component: "input",
  },
  {
      name: "alphaFetoprotein",
      type: "text",
      req: false,
      placeholder: "Alpha fetoprotein",
      component: "input",
  },
  {
      name: "bhcg",
      type: "text",
      req: false,
      placeholder: "B-HCG",
      component: "input",
  },
  {
      name: "antid",
      type: "text",
      req: false,
      placeholder: "Anti-D",
      component: "input",
  },
  {
      name: "rf",
      type: "text",
      req: false,
      placeholder: "RF",
      component: "input",
  },
  {
      name: "asot",
      type: "text",
      req: false,
      placeholder: "ASOT",
      component: "input",
  },
  {
      name: "CRP",
      type: "text",
      req: false,
      placeholder: "CRP",
      component: "input",
  }
]

const lab2Fields = [
  ...bloodAnalysisResultFields,
  ...cbcFields,
  ...liverFunctionsFields,
  ...ptFields,
  ...kidneyFunctionsFields,
  ...ionsFields,
  ...glucoseFields,
  ...othersFields,
]

console.log("##########", lab2Fields)
  const lab2Temp = initialization(lab2Fields)
  let lab2InitialValues = fill(lab2Temp)
  console.log("#################3 ", lab2InitialValues)
  export const lab2Data = {
    fields: lab2Fields,
    initialValues: lab2InitialValues,
  }