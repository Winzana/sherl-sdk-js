export interface ICategoryNew {
  id: string;
  globalUri: string;
  name: string;
  color: string;
  taxeValue: number;
  position: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    others: {};
  };
}
