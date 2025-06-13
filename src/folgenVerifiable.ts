import { FolgenType } from "./folgenType";

export type FolgenVerifiable<T> = FolgenType<T, "verifiable"> & { verified: boolean };

export default FolgenVerifiable;