import { describe, it, expect } from "vitest"
import { GameEngine } from "../gameEngine"

describe("GameEngine", () => {
    it("should draw cards for players", async () => {

        const game = new GameEngine({
            DrawCards: async (cardCount: number) => {
                return [
                    {code: "AS"},
                    {code: "AS"},
                    {code: "AS"},
                    {code: "AS"}
                ];
            }
        })

        await game.StartGame();

        expect(game.player.cards.length).toBe(2);
        expect(game.dealer.cards.length).toBe(2);
    })
})