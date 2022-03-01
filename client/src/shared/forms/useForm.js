import { useState, useEffect, useCallback } from "react";
import { getPropValues, isObject, VALUE, ERROR } from "./utils";

const useForm = (
  stateSchema = {},
  stateValidatorSchema = {},
  submitFormCallback,
  initDisable = true
) => {
  const [state, setStateSchema] = useState(stateSchema);

  const [values, setValues] = useState(getPropValues(state, VALUE));
  const [errors, setErrors] = useState(getPropValues(state, ERROR));
  const [dirty, setDirty] = useState(getPropValues(state, false));

  const [disable, setDisable] = useState(initDisable);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setStateSchema(stateSchema);
    setInitialErrorState();
  }, []); // eslint-disable-line

  useEffect(() => {
    const values = getPropValues(state, VALUE);
    setValues(values);
    setErrors(
      Object.keys(values).reduce((accu, curr) => {
        accu[curr] = validateField(curr, values[curr]);
        return accu;
      }, {})
    );
  }, [state]); // eslint-disable-line

  useEffect(() => {
    if (isDirty) {
      setDisable(validateErrorState());
    }
  }, [errors, isDirty]); // eslint-disable-line

  const setFieldValue = ({ name, value }) => {
    setValues(prevState => ({ ...prevState, [name]: value }));
    setDirty(prevState => ({ ...prevState, [name]: true }));
  };

  const setFieldError = ({ name, error }) =>
    setErrors(prevState => ({ ...prevState, [name]: error }));

  const validateField = useCallback(
    (name, value) => {
        const validator = stateValidatorSchema;
        if (!validator[name]) 
            return;

        const field = validator[name];
        let error = "";
        if (isObject(field["required"]) && error === "") {
            const required = field["required"];
            if (required["isRequired"] && !value) {
                error = required["error"];
            }
        }

        if (isObject(field["validator"]) && error === "") {
            const validateFieldByCallback = field["validator"];
            
            if (!validateFieldByCallback["func"](value, values)) {
                error = validateFieldByCallback["error"];
            }
        }
        return error;
    },
    [stateValidatorSchema, values]
  );

    const setInitialErrorState = useCallback(() => {
        Object.keys(errors).map(name =>
            setFieldError({ name, error: validateField(name, values[name]) })
        );
    }, [errors, values, validateField]);

    const validateErrorState = useCallback(() => Object.keys(errors).map(item => errors[item]).some(error => error), [errors]);

    const handleOnSubmit = useCallback(
      event => {
        event.preventDefault();

        if (!validateErrorState()) {
          submitFormCallback(values);
        }
      },
      [validateErrorState, submitFormCallback, values]
    );

    const handleOnChange = useCallback(
      event => {
        setIsDirty(true);
        if (event.isFormData) {
          setFieldValue({ name: "formData", value: { ...event.formData, [event.name]: event.target.value } });
        } else {
          const name = event.target.name;
          const value = event.target.value;

          const error = validateField(name, value);

          setFieldValue({ name, value });
          setFieldError({ name, error });
        }
      },
      [validateField]
    );
    return { dirty, values, errors, disable, setStateSchema, setFieldValue, setFieldError, handleOnChange, handleOnSubmit };
}

export default useForm;