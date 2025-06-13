import Content from "./content";

export type Loadable<T> = Content<T> & { loading: boolean }

export default Loadable;