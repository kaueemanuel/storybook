export const populateForm = (
  form: any,
  formValidatorSchema: any,
  response: any,
) => {
  if (response) {
    Object.keys(formValidatorSchema.shape).forEach((key: string) => {
      if (
        response?.[key] ||
        response?.[key] === false ||
        response?.[key] === 0
      ) {
        form.setValue(key, response[key])
      }
    })
  }
}
