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
