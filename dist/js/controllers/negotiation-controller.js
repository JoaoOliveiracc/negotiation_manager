export class NegotiationController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        console.log(this.inputData, this.inputQuantity, this.inputValue);
    }
}
