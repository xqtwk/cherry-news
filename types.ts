export interface Element {
    id: number;
    category: string;
    title: string;
    text: string;
  }
export enum Categories {
    "POLITICS" = "Politics",
    "BUSINESS" = "Business",
    "TECH" = "Tech",
    "ARTS" = "Arts",
    "SCIENCE" = "Science",
    "HEALTH" = "Health",
    "SPORTS" = "Sports",
}