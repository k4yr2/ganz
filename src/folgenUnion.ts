import { FolgenType } from "./folgenType";

export type FolgenUnion<U extends FolgenType[]> = U extends [infer Head, ...infer Tail]
    ? Head & FolgenUnion<Tail extends FolgenType[] ? Tail : []>
    : unknown;