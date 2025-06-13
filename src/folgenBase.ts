import FolgenContent from "./folgenContent";

export abstract class FolgenBase<T> {
    protected constructor(public content: FolgenContent<T>) {
    }
}

export default FolgenBase;