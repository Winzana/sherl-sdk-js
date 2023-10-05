export interface IUpdatePasswordDto {
  oldPassword: string;
  password: string;
  passwordRepeat: string;
}

export interface IResetPasswordRequestDto {
  email: string;
}
export interface IResetPasswordDto {
  token: string;
  password: string;
  passwordRepeat: string;
}
