const externalReferralFields = [
    {component: "label",placeholder: "External Referral"},
    {
        name: "referralPurpose",
        type: "select",
        req: true,
        placeholder: "Referral/Purpose",
        component: "checklist",
    } 
]
const diagnosisFields = [
    {component: "label",placeholder: "Diagnosis"},
    {
        name: "clinic1Diagnosis",
        type: "text",
        req: false,
        placeholder: "Clinic 1 diagnosis",
        component: "input",
    } 
]
const treatmentFields = [
    {component: "label",placeholder: "Treatment"},
    {
        name: "treatment1",
        type: "select",
        req: true,
        placeholder: "Treatment#1",
        component: "checklist",
    },
    {
        name: "ttt1Count",
        type: "text",
        req: false,
        placeholder: "TTT#1 count",
        component: "input",
    },
    {
        name: "otherTtt1",
        type: "text",
        req: false,
        placeholder: "Other ttt#1",
        component: "input",
    },
    {
        name: "otherTtt1Count",
        type: "text",
        req: false,
        placeholder: "Other ttt#1 count",
        component: "input",
    },
    {
        name: "submitOrFollowUp",
        type: "select",
        req: true,
        placeholder: "Submit or follow up",
        component: "radio",
    }
]