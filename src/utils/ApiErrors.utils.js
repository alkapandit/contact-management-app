export class ApiErrors extends Error {
  constructor(message = "Something went wrong!", statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  }
}
