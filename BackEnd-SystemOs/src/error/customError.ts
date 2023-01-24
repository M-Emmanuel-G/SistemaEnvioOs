export class CustomError extends Error {
    constructor(
        public statusCode:Number,
        public message:string
    ){
        super(message)
    }
}