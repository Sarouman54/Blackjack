import { Card } from "../entities/Card";
import { IDeckManager } from "../interfaces/IDeckManager";

const axios = require('axios');
const DECK_COUNT = 6;

export class DeckManagerServices implements IDeckManager{

    private deckId: string;

    async DrawCards(cardCount): Promise<Card[]> {
        const response = await axios.get('http://deckofcards.raltech.school/api/deck/' + this.deckId + '/draw/?count=' + cardCount);
        return response.data;
    }

    async InitDeck() {
        const response = await axios.get('http://deckofcards.raltech.school/api/deck/new/shuffle/?deck_count='+DECK_COUNT);
        this.deckId = response.data.deck_id;
    }
}