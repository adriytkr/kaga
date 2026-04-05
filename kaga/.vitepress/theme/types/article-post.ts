export type Heading={
  depth:number;
  text:string;
  slug:string;
};

export interface TocItem{
  depth:number;
  text:string;
  slug:string;
  children:TocItem[];
}
