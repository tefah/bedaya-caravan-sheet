export const label = "create new patient";
export const fields = [
  {
    name: "databaseCode",
    type: "text",
    req: true,
    placeholder:"database code",
    component: "input",
    key: 1,
  },
  {
    name: "agePhase",
    type: "select",
    req: true,
    placeholder:"Age Phase",
    component: "radio",
    options: ["adult", "child"],
    key: 1,
  },
];
export const initialValues = {"databaseCode": '', "agePhase": 'adult'}
export const validate = (values) => {
  return true;
}
export const submit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
}