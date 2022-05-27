// Object Literals
function httpStatus(type) {
    const Code = {
        ok: 200,
        noContent: 204,
        notFound: 404,
        badRequest: 400,
        unprocessableEntity: 422,
    };

    return Code[type];
}

const httpStatusCheck = (errorType) => {
    if (errorType === 'number.min' || errorType === 'string.min') {
        return httpStatus('unprocessableEntity');
    } 
    if (errorType === 'any.required') return httpStatus('badRequest');
};

module.exports = {
    httpStatus,
    httpStatusCheck,
};
