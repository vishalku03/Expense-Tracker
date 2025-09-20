const success = (statusCode, data) => ({ status: "success", statusCode, data });
const error = (statusCode, message) => ({ status: "error", statusCode, message });

module.exports = { success, error };
