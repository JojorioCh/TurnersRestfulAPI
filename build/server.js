"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use("/turners/quotes");
const PORT = process.env.port || 3000;
server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
