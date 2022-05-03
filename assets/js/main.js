import { ToolsFactory } from "./imports/ToolsFactory.js";
import { ToolsUI } from "./imports/ToolsUI.js";

const factory = new ToolsFactory()
const tools = new ToolsUI('.js-tools')

console.log(factory, tools)