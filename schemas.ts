import Joi from "joi";

export type RegisterFormInputs = {
  username: string;
  password: string;
};

export const RegisterFormSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export type LoginFormInputs = {
  username: string;
  password: string;
};

export const LoginFormSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export type SendOTP = {};

export const SendOTPSchema = Joi.object();

export type OTPFormInputs = {
  code: string;
};

export const OTPFormSchema = Joi.object({
  code: Joi.string().required(),
});
