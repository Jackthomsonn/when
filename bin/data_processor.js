"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProcessor = void 0;
const when_1 = require("./when");
const handle_modbus = () => {
    return "Handling ModBus stuff...";
};
const handle_mbus = () => {
    return "Handling MBus stuff...";
};
class DataProcessor {
    process_data(data) {
        return data;
    }
}
__decorate([
    when_1.when([
        {
            match_on: { modbus: {} },
            do: handle_modbus,
        },
        {
            match_on: { mbus: {} },
            do: handle_mbus,
        },
    ])
], DataProcessor.prototype, "process_data", null);
exports.DataProcessor = DataProcessor;
// The approach above makes for much easier testing
// We send some data to the process_data method
// Depending on the structure, we delegate the processing logic
// To the correct controller
// We have no if else statements, no switch statements etc
// Which makes for easier reading and reduces code complexity
