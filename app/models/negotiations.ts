import { Negotiation } from "./negotiation";

export class Negotiations {
    private negotiations: Array<Negotiation> = [];

    add(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }

    list(): Array<Negotiation> {
        return [...this.negotiations];
    }
}