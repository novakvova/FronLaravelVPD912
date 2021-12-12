import { Form, FormikProvider, useFormik } from "formik";
import { ILoginModel } from "./types";
import { LoginSchema } from "./validation";
import {InputGroup} from '../../common/InputGroup';
import { useActions } from '../../../hooks/useActions';

const LoginPage = () => {

  const { LoginUser } = useActions();
  const initialValues: ILoginModel = {
    email: "",
    password: "",
  };
  const onHandleSubmit = (values: ILoginModel) => {
    console.log("Server Send data: ", values);
    LoginUser(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: onHandleSubmit,
  });

  const { errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1>Вхід на сайт</h1>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <InputGroup
              field="email"
              label="Пошта"
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
            />

            <InputGroup
              field="password"
              label="Пароль"
              type="password"
              touched={touched.password}
              error={errors.password}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-success">
              Вхід
            </button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default LoginPage;
