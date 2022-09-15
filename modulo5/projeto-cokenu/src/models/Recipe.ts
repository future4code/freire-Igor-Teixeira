export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private created: string,
    private userId: string
  ) {}

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getCreated() {
    return this.created;
  }
  getUserId() {
    return this.userId;
  }
}
