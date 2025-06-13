import { FolgenType } from "./folgenType";

export type FolgenVerifiable = FolgenType<"verifiable"> & { verified: boolean };

export default FolgenVerifiable;