export interface IUpdatePasswordDto {
  oldPassword: string;
  password: string;
  passwordRepeat: string;
}

export interface IValidateForgotPasswordDto {
  token: string;
  password: string;
  passwordRepeat: string;
}
