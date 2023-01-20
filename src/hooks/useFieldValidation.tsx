/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { get } from "lodash";

interface IProps {
  fieldState: {
    isTouched?: boolean;
    error?: {
      message?: string;
    };
  };
  submitCount: number;
}

interface IReturnProps {
  hasFeedback: boolean | undefined;
  validationMessage: string | boolean | undefined;
  validationStatus: "error" | "success";
}

const useFieldValidation = ({
  fieldState,
  submitCount,
}: IProps): IReturnProps => {
  const touched = get(fieldState, "isTouched");
  const hasError = get(fieldState.error, "message");
  const submitted = submitCount > 0;
  const touchedError = (touched ?? false) && hasError;
  const submittedError = hasError != null && submitted;

  const hasFeedback = submitted || touched;
  const validationMessage = submittedError || touchedError ? hasError : false;
  const validationStatus = submittedError || touchedError ? "error" : "success";

  return {
    hasFeedback,
    validationMessage,
    validationStatus,
  };
};

export default useFieldValidation;
