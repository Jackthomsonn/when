type Rule = {
  match_on: any;
  do: Function;
};

export const when = (rule: Rule[]) => {
  return (
    _target: any,
    _propertyName: string,
    descriptor: TypedPropertyDescriptor<any>
  ) => {
    descriptor.value = (data) => {
      const result = rule
        .map((r) => {
          const m_keys = Object.keys(r.match_on);
          const d_keys = Object.keys(data);

          if (m_keys.every((a) => d_keys.includes(a))) {
            return r.do(data);
          }
        })
        .filter((s) => s !== undefined)[0];

      return result === undefined ? "No matching clause" : result;
    };

    return descriptor;
  };
};
