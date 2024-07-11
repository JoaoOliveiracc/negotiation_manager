var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _quantity, _value;
export class Negotiation {
    constructor(data, quantity, value) {
        _data.set(this, void 0);
        _quantity.set(this, void 0);
        _value.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _quantity, quantity);
        __classPrivateFieldSet(this, _value, value);
    }
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    get quantity() {
        return __classPrivateFieldGet(this, _quantity);
    }
    get value() {
        return __classPrivateFieldGet(this, _value);
    }
    get volume() {
        return __classPrivateFieldGet(this, _quantity) * __classPrivateFieldGet(this, _value);
    }
}
_data = new WeakMap(), _quantity = new WeakMap(), _value = new WeakMap();
