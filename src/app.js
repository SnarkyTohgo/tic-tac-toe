const appRoot = document.getElementById('root')  
const head = document.getElementById('windowTitle')  
 
const headTitle = "Tic-Tac-Toe"             
ReactDOM.render(headTitle, head)            


const checkWinner = squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ] 

    for (let line of lines) {
        const [a, b, c] = line
        
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null
}

const Square = props => {
    return (
        <button className="square" onClick={props.onClick}>
            { props.value }
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            isX: true
        }
    }
    
    handleClick(i) {
        const move = this.state.squares.slice()
        
        if (move[i] === null) {
            move[i] = this.state.isX ? 'X' : 'O'
        }

        this.setState({ 
            squares: move,
            isX: !this.state.isX 
        })
    }

    renderSquare(i) {
        return (
            <Square 
                value={ this.state.squares[i] } 
                onClick={ () => this.handleClick(i) }
            />
        )
    }

    render() {
        const winner = checkWinner(this.state.squares)
        let status

        if (winner) {
            status = `Winner: ${winner}`
        } else {
            status = this.state.isX ? 'Next player: X' : 'Next player: O'
        }
        
        return (
            <div>
                <div className="status">{status}</div>          
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}


class Game extends React.Component {
    render() {
        return (
            <div className="Game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ /*Status*/ }</div>
                    <ol>{ /*TODO*/ }</ol>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Game />, root)