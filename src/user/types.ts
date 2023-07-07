export interface IUpdatePasswordDto {
  oldPassword: string;
  password: string;
  passwordRepeat: string;
}

export interface IResetPasswordRequestDto {
  email: string;
}
