export abstract class CustomError extends Error {
  constructor(message: string) {
    super(message);
    // Only because I am extending a built in Class
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract statusCode: number;

  abstract serializeErrors(): {
    message: string;
    field?: string;
  }[];
}
