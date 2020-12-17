export default class redActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 1414,
      height: 1000,
      classes:["red", "sheet", "actor"]
    });
  }

  get template() {
    return `systems/red/templates/sheets/${this.actor.data.type}-sheet.hbs`;
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.red;
    console.log(data);
    return data
  }
}