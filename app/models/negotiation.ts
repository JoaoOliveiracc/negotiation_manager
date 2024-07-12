export class Negotiation {
    private _data;
    private _quantity;
    private _value;

    constructor(data: Date, quantity: number, value: number) {
        this._data = data;
        this._quantity = quantity;
        this._value = value;
    }

    get data(): Date {
        return this._data;
    }

    get quantity(): number {
        return this._quantity;
    }

    get value(): number {
        return this._value;
    }

    get volume(): number {
        return this._quantity * this._value;
    }
}