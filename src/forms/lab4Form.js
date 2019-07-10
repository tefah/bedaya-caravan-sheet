import {stoolanalysisResults, microscopicExamination} from './helpers/page6'


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

const stoolAnalysisResultsFields = [
  {component: "label", placeholder: "Stool analysis results"},
  {
      name: "stoolAnalysis",
      type:"checkbox",
      req: true,
      placeholder: "Stool analysis",
      component: "checkbox",
  }
]
const physicalDataFields = [
  {component: "label", placeholder: "Physical data"},
  {
      name: "blood",
      type: "select",
      req: true,
      placeholder: "Blood",
      component: "radio",
      options: stoolanalysisResults.blood
  },
  {
      name: "mucus",
      type: "select",
      req: true,
      placeholder: "Mucus",
      component: "radio",
      options: stoolanalysisResults.mucus
  },
  {
      name: "color",
      type: "select",
      req: true,
      placeholder: "Color",
      component: "checklist",
      options: stoolanalysisResults.color
  },
  {
      name: "worm",
      type: "select",
      req: true,
      placeholder: "Worm",
      component: "radio",
      options: stoolanalysisResults.worm
  }
]
const microscopicDataFields = [
  {component: "label", placeholder: "Microscopic data"},
  {
      name: "parasiticInfection",
      type: "select",
      req: true,
      placeholder: "Parasitic infection",
      component: "radio",
      options: microscopicExamination.parasiticInfection
  }
]
const parasitesHelminthesProtozoaFields = [
  {component: "label", placeholder: "Parasites (helminthes & protozoa)"},
  {
      name: "fasciola",
      type: "select",
      req: true,
      placeholder: "Fasciola",
      component: "radio",
      options: microscopicExamination.Fasciola
  },
  {
      name: "schMansoni",
      type: "select",
      req: true,
      placeholder: "Sch.mansoni",
      component: "radio",
      options: microscopicExamination.Fasciola
  },
  {
      name: "hNana",
      type: "select",
      req: true,
      placeholder: "H.nana",
      component: "radio",
      options: microscopicExamination.hnana
  },
  {
      name: "tinea",
      type: "select",
      req: true,
      placeholder: "Tinea",
      component: "radio",
      options: microscopicExamination.tinea
  },
  {
      name: "ascaris",
      type: "select",
      req: true,
      placeholder: "Ascaris",
      component: "radio",
      options: microscopicExamination.ascaris      
  },
  {
      name: "tTrichuria",
      type: "select",
      req: true,
      placeholder: "T.trichuria",
      component: "radio",
      options: microscopicExamination.ttrichuria
  },
  {
      name: "hookWorm",
      type: "select",
      req: true,
      placeholder: "Hook Worm",
      component: "radio",
      options: microscopicExamination.hookworm
  },
  {
      name: "enterobius",
      type: "select",
      req: true,
      placeholder: "Enterobius",
      component: "radio",
      options: microscopicExamination.enterobius
  },
  {
      name: "eColi",
      type: "select",
      req: true,
      placeholder: "E.coli",
      component: "radio",
      options: microscopicExamination.ecoli
  },
  {
      name: "eHistolytica",
      type: "select",
      req: true,
      placeholder: "E.histolytica",
      component: "radio",
      options: microscopicExamination.ehistolytica
  },
  {
      name: "giardia",
      type: "select",
      req: true,
      placeholder: "Giardia",
      component: "radio",
      options: microscopicExamination.giardia

  },
  {
      name: "strongyloiesLarva",
      type: "select",
      req: true,
      placeholder: "Strongyloies Larva",
      component: "radio",
      options: microscopicExamination.stroguloiesLarva
  },
  {
      name: "giardiaTrophozoite",
      type: "select",
      req: true,
      placeholder: "Giardia trophozoite",
      component: "radio",
      options: microscopicExamination.giardiaTrophozoite
  },
  {
      name: "giardiaTrophozoiteCount",
      type: "text",
      req: false,
      placeholder: "Giardia trophozoite count",
      component: "input",
  },
  {
      name: "eHistolyticaTrophozoite",
      type: "select",
      req: true,
      placeholder: "E.histolytica trophozoite",
      component: "radio",
      options: microscopicExamination.ehistolyticaTrophozoite
  },
  {
      name: "eHistolyticaTrophozoiteCount",
      type: "text",
      req: false,
      placeholder: "E.histolytica trophozoite count",
      component: "input",
  },
  {
      name: "wbcs",
      type: "select",
      req: true,
      placeholder: "WBCS",
      component: "radio",
      options: microscopicExamination.wbcs
  },
  {
      name: "wbcsCount",
      type: "text",
      req: false,
      placeholder: "WBCS count",
      component: "input",
  },
  {
      name: "rbcs",
      type: "select",
      req: true,
      placeholder: "RBCs",
      component: "radio",
      options: microscopicExamination.rbcs

  },
  {
      name: "rbcsCount",
      type: "text",
      req: false,
      placeholder: "RBCs count",
      component: "input",
  }
]
const additionalTestsFields = [
  {component: "label", placeholder: "Additional tests"},
  {
      name: "hPylori",
      type: "select",
      req: true,
      placeholder: "H.Pylori",
      component: "radio",
      options: microscopicExamination.hpylori

  },
  {
      name: "fobt",
      type: "select",
      req: true,
      placeholder: "FOBT",
      component: "radio",
      options: microscopicExamination.fobt

  }
]


const lab4Fields = [
  ...stoolAnalysisResultsFields,
  ...physicalDataFields,
  ...microscopicDataFields,
  ...parasitesHelminthesProtozoaFields,
  ...additionalTestsFields,
]

console.log("##########", lab4Fields)
  const lab4Temp = initialization(lab4Fields)
  let lab4InitialValues = fill(lab4Temp)
  console.log("#################3 ", lab4InitialValues)
  export const lab4Data = {
    fields: lab4Fields,
    initialValues: lab4InitialValues,
  }