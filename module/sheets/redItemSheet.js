export default class redItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 530,
      height: 340,
      classes:["red", "sheet", "item"]
    });
  }
  
  get template() {
    return `systems/red/templates/sheets/${this.item.data.type}-sheet.hbs`;
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.red;
    console.log(data);
    return data
  }
}
