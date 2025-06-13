import FolgenContent from "./folgenContent";

export type FolgenLoadable<T> = FolgenContent<T> & { loading: boolean }

export default FolgenLoadable;