# Tic Tac Toe React App with Vite

This is a simple Tic Tac Toe game built using React and Vite.

## Features

- Interactive Tic Tac Toe game board
- Tracks the current player's turn
- Detects and displays the winner
- Allows restarting the game

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/tic-tac-toe-react-vite.git
   ```

2. Navigate to the project directory:

   ```
   cd tic-tac-toe-react-vite
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the App

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:5173` to view the Tic Tac Toe game.

## Usage

1. The game starts with player 'X' making the first move.
2. Players take turns placing their marks (X or O) on the 3x3 grid.
3. The game continues until one player gets three of their marks in a row (horizontally, vertically, or diagonally), or all squares are filled and the game is a tie.
4. When a player wins or the game is a tie, the result is displayed, and the player has the option to restart the game.

## Technologies Used

- React
- Vite (a fast, modern, and lightweight build tool for React)
- React Hooks (useState, useEffect)
- CSS for styling

## Project Structure

The project has the following structure:

```
tic-tac-toe-react-vite/
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── Square.js
│   │   └── Game.js
│   ├── styles/
│   │   └── styles.css
│   ├── App.js
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

- `Board.js`: Renders the 3x3 Tic Tac Toe board.
- `Square.js`: Renders a single square on the board.
- `Game.js`: Manages the game state and logic.
- `App.js`: The main entry point of the application.
- `styles.css`: Contains the CSS styles for the application.
- `main.jsx`: The entry point for the Vite-based React application.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
