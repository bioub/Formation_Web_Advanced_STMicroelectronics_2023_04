"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
let port = 4000;
const server = (0, node_http_1.createServer)(app_1.app);
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        // si le port est occupé, on tente le port suivant
        port++;
        startServer();
    }
});
function startServer() {
    server.listen(port, async () => {
        console.log(`Server started on http://localhost:${port}`);
        await mongoose_1.default.connect('mongodb://127.0.0.1:27017/test');
        console.log(`Mongoose connection pool created`);
    });
}
startServer();
