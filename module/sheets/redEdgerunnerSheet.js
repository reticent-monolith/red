export default class redEdgerunnerSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 1414,
      height: 1000,
      classes:["red", "sheet", "edgerunner"],
      tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-content", initial: "stats"}]
    });
  }

  get template() {
    return `systems/red/templates/sheets/edgerunner-sheet.hbs`;
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.red;
    console.log(data);
    return data
  }
}