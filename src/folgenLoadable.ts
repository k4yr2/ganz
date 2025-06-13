import { FolgenType } from "./folgenType";

export type FolgenLoadable = FolgenType<"loadable"> & { loading: boolean };

export default FolgenLoadable;