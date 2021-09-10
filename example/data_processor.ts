import { when } from "../src/when";

const handle_modbus = () => {
  return "Handling ModBus stuff...";
};

const handle_mbus = () => {
  return "Handling MBus stuff...";
};

export class DataProcessor {
  @when([
    {
      match_on: { modbus: {} },
      do: handle_modbus,
    },
    {
      match_on: { mbus: {} },
      do: handle_mbus,
    },
  ])
  process_data(data) {
    return data;
  }
}

// The approach above makes for much easier testing
// We send some data to the process_data method
// Depending on the structure, we delegate the processing logic
// To the correct controller
// We have no if else statements, no switch statements etc
// Which makes for easier reading and reduces code complexity
