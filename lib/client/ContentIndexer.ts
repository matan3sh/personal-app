import { SearchContent } from "@interfaces/Markdown";
import * as JsSearch from "js-search";
import { getLocalSearchIndex } from "./utils";

class ContentIndexer {
  private static instance: ContentIndexer;
  private searchEngine!: JsSearch.Search;

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  constructor() {
    this.buildIndex();
  }

  private buildIndex() {
    this.searchEngine = new JsSearch.Search("slug");
    this.searchEngine.addIndex("title");
    this.searchEngine.addIndex("description");
    this.searchEngine.addDocuments(getLocalSearchIndex());
  }

  public search(query: string): SearchContent[] {
    const results = this.searchEngine.search(query);
    return results as SearchContent[];
  }
}

export default ContentIndexer.Instance;
