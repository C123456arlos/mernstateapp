// export const errorHandler = (statusCode, message) => {
//     const error = new Error()
//     error.statusCode = statusCode
//     error.message = message
//     return error
// }

// export const errorHandler = (statusCode, message) => {
//     const error = new Error();
//     error.statusCode = statusCode;
//     error.message = message;
//     return error;
// };


export const errorHandler = (statusCode, message) => {
    const error = new Error(message); // Pass message here
    error.statusCode = statusCode;
    return error;
};