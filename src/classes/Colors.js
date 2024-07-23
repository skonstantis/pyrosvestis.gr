/* Author: Sotiris Konstantis */

export default class Colors {
  constructor() {
    this.items = new Map();

    this.addItem(0, "#A5FEA4");
    this.addItem(1, "#A7CAF0");
    this.addItem(2, "#FFFF00");
    this.addItem(3, "#FFA304");
    this.addItem(4, "#FE0003");
    this.addItem(-1, "#505050");
  }

  addItem(id, color) {
    this.items.set(id, color);
  }

  getColorId(color) {
    for (let [id, itemColor] of this.items.entries()) {
      if (itemColor === color) {
        return id;
      }
    }
    return null;
  }
}
