import Joi from "joi";

export type RegisterFormInputs = {
  userName: string;
  password: string;
};

export const RegisterFormSchema = Joi.object({
  userName: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().required(),
});


export type LoginFormInputs = {
  userName: string;
  password: string;
};

export const LoginFormSchema = Joi.object({
  userName: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().required(),
});
