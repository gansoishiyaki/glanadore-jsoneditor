export class Card{
  public id: string
  public title: string
  public description: string

  constructor(data: any) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
  }
}