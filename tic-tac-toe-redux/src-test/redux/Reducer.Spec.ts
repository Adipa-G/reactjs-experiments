import reducer from "../../src/redux/Reducer";

import { GameState } from "../../src/models/GameState";

describe("Reducer", () => {
    it("Should return the initial state", () => {
        var result = reducer(undefined, {});
        expect(result).toBeDefined();
    });

    it("Should return the same state when winner", () => {
        var orgState = reducer(undefined, {});
        orgState.winner = "X";

        var result = reducer(orgState, {});

        expect(result).toBe(orgState);
    });

    it("Should calculate the next state ", () => {
        var orgState = reducer(undefined, {});
        
        var result = reducer(orgState, {SquareIndex : 0});

        expect(result).not.toBe(orgState);
        expect(result.history.length).toBe(3);
        expect(result.stepNumber).toBe(2);
        expect(result.xIsNext).toBe(!orgState.xIsNext);
        expect(result.winner).toBeNull();

        expect(result.history[2].squares[0]).not.toBeNull();
        expect(result.history[2].squares[0]).toBe("O");
    });

    it("Should set winner if there is a winner", () => {
        var orgState = reducer(undefined, {});
        orgState.history[1].squares[0] = "X";
        orgState.history[1].squares[1] = "X";
        orgState.history[1].squares[2] = "X";
        
        var result = reducer(orgState, {SquareIndex : 5});

        expect(result.winner).toBe("X");
    });
});