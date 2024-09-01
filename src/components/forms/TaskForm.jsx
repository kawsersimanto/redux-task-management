import { FormProvider, useForm } from "react-hook-form";

const TaskForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  className,
}) => {
  const formConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit } = methods;

  const submit = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default TaskForm;
