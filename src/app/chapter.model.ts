export class Chapter {
  id: string;
  title: string;
  chapter: string;
  cover_image: string;
  theories: Array<string>;
  summary: string;
  references: {
    mangas: Array<string>;
    reviews: Array<string>;
    reactions: Array<string>;
  };
  characters: Array<string>;
  cover_characters: Array<string>;
  publish: string;
  explanation: string;
}
