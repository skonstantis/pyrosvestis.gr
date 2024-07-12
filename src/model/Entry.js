/* Author: Sotiris Konstantis */

class Entry{
    constructor(date, values)
    {
        this.date =  date;
        this.values = values;
    }

    addValue(value)
    {
        this.values.add(value);
    }
}

export default Entry;