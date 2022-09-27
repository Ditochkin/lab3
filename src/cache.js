class Cache
{
    constructor()
    {
        this.mapKeyVal = new Map();
        this.mapKeyNum = new Map();
        this.statistic = new String();
        this.statistic = "";
    }

    setValue(Key, Value, Number = 1)
    {
        if (typeof Number == "number")
        {
            this.statistic += "Set:  " + Key + "  " + Value + "  " + Number + "\n"
            this.mapKeyVal.set(Key, Value);
            this.mapKeyNum.set(Key, Number);
        }
        else
        {
            this.statistic += "Set:  " + Key + "  " + Value + "  " + Number + "  -  uncorrect number\n"
            return null;
        }
    }

    getValue(Key)
    {
        if (this.mapKeyVal.get(Key) === undefined)
        {
            this.statistic += "Get:  " + Key + "  -  undefined key\n"
            return null;
        }

        let number = this.mapKeyNum.get(Key);
        
        if (number == 0)
        {
            this.statistic += "Get:  " + Key + "  " + this.mapKeyVal.get(Key) + "  " + this.mapKeyNum.get(Key) + "  -  null\n"
            return null;
        }
        if (number > 0)
        {
            this.mapKeyNum.set(Key, number - 1);
            this.statistic += "Get:  " + Key + "  " + this.mapKeyVal.get(Key) + "  " + this.mapKeyNum.get(Key) + "\n"
            return this.mapKeyVal.get(Key);
        }
    }

    getStatistic()
    {
        return this.statistic;
    }
}



const cache = new Cache();
cache.setValue("Dog", "Druzhok", 1);

console.log(cache.getStatistic());

export {Cache}