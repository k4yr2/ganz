import { FolgenType } from "./folgenType";

export type FolgenVerifiable<T> = FolgenType<T> & { verified: boolean };

export default FolgenVerifiable;