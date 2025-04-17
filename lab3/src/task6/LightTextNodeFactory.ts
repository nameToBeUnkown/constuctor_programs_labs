import { LightTextNode } from "../task5/LightTextNode";

export class LightTextNodeFactory {
  private textNodeCache: Map<string, LightTextNode> = new Map();

  /**
   * Gets a LightTextNode instance for the given text.
   * Reuses existing instances if the text matches, otherwise creates a new one.
   * @param text The text content for the node.
   * @returns A shared or new LightTextNode instance.
   */
  public getTextNode(text: string): LightTextNode {
    if (!this.textNodeCache.has(text)) {
      const newNode = new LightTextNode(text);
      this.textNodeCache.set(text, newNode);
    } else {
    }

    return this.textNodeCache.get(text)!;
  }

  /**
   * Gets the number of unique text nodes currently cached.
   * @returns The size of the cache.
   */
  public getCacheSize(): number {
    return this.textNodeCache.size;
  }
}
