import { DataProcessor } from "./data_processor";

const dp = new DataProcessor();

dp.process_data({
  mbus: {
    baud: 2000,
  },
});
