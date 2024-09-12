import { FieldValues, UseFormReturn } from "react-hook-form"

export interface FormStoreBase<T extends FieldValues = any> {
  formId: string
  loading: boolean
  setLoading: (value: boolean) => void
  onSubmit: (postData: T) => Promise<void>
  populateForm?: (id: string | number) => Promise<void>
  getForm: () => UseFormReturn<T>
  setForm: (form: UseFormReturn<T>) => void
}
