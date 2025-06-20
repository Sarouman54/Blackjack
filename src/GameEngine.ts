import { Player } from "./entities/Player";
import { IDeckManager } from "./interfaces/IDeckManager";

export class GameEngine {
    player: Player = {
        cards: []
    }
    dealer: Player = {
        cards: []
    }

    deckManager: IDeckManager;

    constructor(deckManager: IDeckManager){
        this.deckManager = deckManager;
    }

    async StartGame() {
        // await this.deckManager.InitDeck();
        const cards = await this.deckManager.DrawCards(4);

        this.player.cards = cards.slice(0, 2);
        this.dealer.cards = cards.slice(2, 4);
    }
}