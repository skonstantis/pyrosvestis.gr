/* Author: Sotiris Konstantis */

export default class Levels {
    constructor() {
      this.items = new Map();
  
      this.addItem(0, "Χαμηλός");
      this.addItem(1, "Μέσος");
      this.addItem(2, "Υψηλός");
      this.addItem(3, "Πολύ Υψηλός");
      this.addItem(4, "Κατάσταση Συναγερμού");
      this.addItem(5, "Μη Διαθέσιμο");
    }
  
    addItem(id, risk) {
      this.items.set(id, risk);
    }
  }