export type FolgenType<T = any, B extends string = string> = { content: T | undefined } & { __brand: B};

export default FolgenType;