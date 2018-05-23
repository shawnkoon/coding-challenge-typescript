/**
 * Node
 *
 * Create Node data structure.
 *
 * follow `./directions.html` documenations.
 */

export class Node {
  public data: any;
  public next: Node | undefined;

  constructor(data: any, next?: Node) {
    this.data = data;
    this.next = next;
  }
}
