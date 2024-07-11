import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
    private inputData: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }

    add() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        const negotiation = new Negotiation(
            date,
            quantity,
            value
        );

        console.log(negotiation);
    }
}