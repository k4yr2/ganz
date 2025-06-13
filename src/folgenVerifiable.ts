import { FolgenType } from "./folgenType";

export type FolgenVerifiable<T = any> = FolgenType<T, "verifiable"> & { verified: boolean };

export default FolgenVerifiable;