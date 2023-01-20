import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().min(10, "more than 10 character").required(),
  })
  .required();

export default schema;
