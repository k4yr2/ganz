import FolgenContent from "./folgenContent";

export type NachvLoadable<T> = FolgenContent<T> & { loading: boolean }

export default NachvLoadable;