var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const myModules_1 = require("./myModules");
console.log(myModules_1.name, (0, myModules_1.sum)(2, 4));
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFileSync('./');
