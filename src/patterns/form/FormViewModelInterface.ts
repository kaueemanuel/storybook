import { FieldValues, UseFormReturn } from "react-hook-form"

export interface FormViewModelInterface<T extends FieldValues> {
  onSubmit: (postData: T) => Promise<void>
  getForm: UseFormReturn<T>
  formId?: string
}
