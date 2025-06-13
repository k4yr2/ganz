declare const brandSymbol : unique symbol;

export type FolgenType<B extends string = string> = { readonly [brandSymbol]: B }

export default FolgenType;