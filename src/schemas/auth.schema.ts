import * as yup from 'yup';

let authSchema = yup.object().shape({
  user: yup.string().required(),
  password: yup.string().required(),
});

export default authSchema;
