/* Author: Sotiris Konstantis */

import Entry from "../model/Entry";

class Entries{
    static array = [];

    static add(date, values)
    {
        Entries.array.push(new Entry(date, values));
    }
}

export default Entries;