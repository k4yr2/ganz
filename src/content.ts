export type Content<T> = { content : T | null } 

export default Content;

//

export class ContentWrapper<T, G extends Content<T> = Content<T>> {

    constructor(protected g: G ) {
    }

    //

    public un() : G {
        return this.g;
    }
}