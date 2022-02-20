import { Formik } from "formik";

const AppForm = ({
  children,
  initialValues,
  validationSchema,
  handleSubmit,
  enableReinitialize = true,
} = {}) => {
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit({ formValues: values });
      }}
    >
      {(props) => <form onSubmit={props.handleSubmit}>{children}</form>}
    </Formik>
  );
};

export default AppForm;
