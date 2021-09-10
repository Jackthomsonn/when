"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_processor_1 = require("./data_processor");
const dp = new data_processor_1.DataProcessor();
const result = dp.process_data({
    mbus: {
        baud: 2000,
    },
});
