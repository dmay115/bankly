const { TextEncoder, TextDecoder } = require("text-encoding");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

module.exports = {
    setupFilesAfterEnv: ["/jest.setup.js"],
};
