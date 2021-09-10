declare type Rule = {
    match_on: any;
    do: Function;
};
export declare const when: (rule: Rule[]) => (_target: any, _propertyName: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
export {};
