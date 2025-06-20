import { Card } from "../entities/Card";

export interface IDeckManager {
    DrawCards(cardCount: number): Promise<Card[]>;
}