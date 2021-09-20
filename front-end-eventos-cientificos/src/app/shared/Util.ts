import * as moment from "moment";

export class Util {
    static compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    static dateNowAsString() {
        return moment().format('DD/MM/YYYY').toString();
    }

    static enumSelector(definition: any) {
        return Object.keys(definition)
            .map(key => ({ value: definition[key], title: key }));
    }
}
