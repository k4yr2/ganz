export abstract class FolgenBase<T> {
    protected constructor(public content: T | null) {
    }
}

export default FolgenBase;