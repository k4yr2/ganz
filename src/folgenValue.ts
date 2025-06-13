import FolgenContent from "./folgenContent";

export type FolgenValue<T = any, Rest = unknown> = FolgenContent<T> & Rest;