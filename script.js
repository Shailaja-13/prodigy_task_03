let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", ""];

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;

    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    checkWinner();
}

function checkWinner() {
    for (let pattern of winningPatterns) {
        let a = board[pattern[0]];
        let b = board[pattern[1]];
        let c = board[pattern[2]];

        if (a !== "" && a === b && b === c) {
            document.getElementById("status").innerText =
                "Player " + currentPlayer + " Wins!";
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        document.getElementById("status").innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    document.getElementById("status").innerText =
        "Player " + currentPlayer + "'s Turn";
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "",];
    currentPlayer = "X";
    gameActive = true;

    let cells = document.getElementsByClassName("cell");

    for (let cell of cells) {
        cell.innerText = "";
    }

    document.getElementById("status").innerText = "Player X's Turn";
}