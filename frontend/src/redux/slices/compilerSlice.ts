import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceState {
  completeCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLang: "html" | "css" | "javascript";
}

// creating state variables to store data
const initialState: CompilerSliceState = {
  completeCode: {
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <h1>Rock, Paper, Scissors</h1>
        <div class="choices">
            <button id="rock" class="choice">Rock</button>
            <button id="paper" class="choice">Paper</button>
            <button id="scissors" class="choice">Scissors</button>
        </div>
        <div id="result" class="result"></div>
        <button id="reset" class="reset-btn">Play Again</button>
    </div>
    <script src="script.js"></script>
</body>
</html>

    `,
    css: `
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.game-container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
}

.choices {
    margin-bottom: 20px;
}

.choice {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 30px;
    margin: 5px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
}

.choice:hover {
    background-color: #45a049;
}

.result {
    font-size: 20px;
    margin-top: 20px;
}

.reset-btn {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

.reset-btn:hover {
    background-color: #007bb5;
}
`,
    javascript: `
    const choices = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset');

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        resultDiv.textContent = "You chose " + playerChoice + ". The computer is thinking...";
        
        setTimeout(() => {
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            determineWinner(playerChoice, computerChoice);
        }, 1000); // 1-second delay to simulate computer thinking
    });
});

resetBtn.addEventListener('click', () => {
    resultDiv.textContent = '';
});

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultDiv.textContent = "It's a draw! You both chose " + playerChoice + ".";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.textContent = "You win! " + playerChoice + " beats " + computerChoice + ".";
    } else {
        resultDiv.textContent = "You lose! " + computerChoice + " beats " + playerChoice + ".";
    }
}

    `,
  },

  currentLang: "html",
};

// defining functions to update the state/data
const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguate: (
      state,
      action: PayloadAction<CompilerSliceState["currentLang"]>
    ) => {
     
      state.currentLang = action.payload;
    },
    updateCode: (
      state,
      action: PayloadAction<string> 
      
    ) => {
       state.completeCode[state.currentLang] = action.payload;

    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguate, updateCode } = compilerSlice.actions;
