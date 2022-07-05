# When clause

Add a `when` annotation to the top of a method and perform pattern matching against arguments provided in the caller. When a pattern is matched, the provided delegator will perform your intended action. It removes the need for an if else clause or switch statement which can get hard to read, the more complex it gets.

*This was inspired by Elixir pattern matching and I wanted to experiment and see if we could replicate the same behaviour in the Javasript eco-system*

```
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
```
