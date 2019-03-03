'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('root');
var head = document.getElementById('windowTitle');

var headTitle = "Tic-Tac-Toe";
ReactDOM.render(headTitle, head);

var checkWinner = function checkWinner(squares) {
    // Array contendo todos os casos possíveis de vitória
    // em que cada elemento dos arrays que ele contém
    // corresponde a uma posição no tabuleio
    var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    // Este for vai percorrer todas as linhas do nosso tabuleiro
    // primeiro na horizontal, depois na vertical e por fim na diagonal
    // se todos os elementos de uma linha forem iguais ele devolve o jogador 
    // vendedor, either 'X' or 'O'
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var line = _step.value;

            var _line = _slicedToArray(line, 3),
                a = _line[0],
                b = _line[1],
                c = _line[2];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
};

var Square = function Square(props) {
    return React.createElement(
        'button',
        { className: 'square', onClick: props.onClick },
        props.value
    );
};

var Board = function (_React$Component) {
    _inherits(Board, _React$Component);

    function Board(props) {
        _classCallCheck(this, Board);

        var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

        _this.state = {
            squares: Array(9).fill(null),
            isX: true
        };
        return _this;
    }

    _createClass(Board, [{
        key: 'handleClick',
        value: function handleClick(i) {
            var move = this.state.squares.slice();

            if (move[i] === null) {
                move[i] = this.state.isX ? 'X' : 'O';
            }

            this.setState({
                squares: move,
                isX: !this.state.isX
            });
        }
    }, {
        key: 'renderSquare',
        value: function renderSquare(i) {
            var _this2 = this;

            return React.createElement(Square, {
                value: this.state.squares[i],
                onClick: function onClick() {
                    return _this2.handleClick(i);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var winner = checkWinner(this.state.squares);
            var status = void 0;

            if (winner) {
                status = 'Winner: ' + winner;
            } else {
                status = this.state.isX ? 'Next player: X' : 'Next player: O';
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'status' },
                    status
                ),
                React.createElement(
                    'div',
                    { className: 'board-row' },
                    this.renderSquare(0),
                    this.renderSquare(1),
                    this.renderSquare(2)
                ),
                React.createElement(
                    'div',
                    { className: 'board-row' },
                    this.renderSquare(3),
                    this.renderSquare(4),
                    this.renderSquare(5)
                ),
                React.createElement(
                    'div',
                    { className: 'board-row' },
                    this.renderSquare(6),
                    this.renderSquare(7),
                    this.renderSquare(8)
                )
            );
        }
    }]);

    return Board;
}(React.Component);

var Game = function (_React$Component2) {
    _inherits(Game, _React$Component2);

    function Game() {
        _classCallCheck(this, Game);

        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
    }

    _createClass(Game, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'Game' },
                React.createElement(
                    'div',
                    { className: 'game-board' },
                    React.createElement(Board, null)
                ),
                React.createElement(
                    'div',
                    { className: 'game-info' },
                    React.createElement('div', null),
                    React.createElement('ol', null)
                )
            );
        }
    }]);

    return Game;
}(React.Component);

ReactDOM.render(React.createElement(Game, null), root);
