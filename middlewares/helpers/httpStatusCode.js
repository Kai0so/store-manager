// Object Literals
function httpStatus(type) {
    const Code = {
        ok: 200,
        notFound: 404,
    };

    return Code[type];
}

module.exports = {
    httpStatus,
};
