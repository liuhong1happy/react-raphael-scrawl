'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../less/style.less');
var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('react-raphael'),
    Paper = _require.Paper,
    Rect = _require.Rect;

var Scrawl = function (_React$Component) {
    _inherits(Scrawl, _React$Component);

    function Scrawl(props) {
        _classCallCheck(this, Scrawl);

        var _this = _possibleConstructorReturn(this, (Scrawl.__proto__ || Object.getPrototypeOf(Scrawl)).call(this, props));

        _this.state = {
            loaded: false
        };
        return _this;
    }

    _createClass(Scrawl, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleStart = this.handleStart.bind(this);
            this.handleMove = this.handleMove.bind(this);
            this.handleEnd = this.handleEnd.bind(this);
            this.setState({
                loaded: true
            });
        }
    }, {
        key: 'handleStart',
        value: function handleStart(x, y, e) {
            this.paper = this.refs.paper.getPaper();
            var container = this.paper.canvas.parentElement;
            this.offset = {
                x: container.offsetLeft,
                y: container.offsetTop
            };
            if (!this.set) this.set = this.paper.set();
            this.path = this.paper.path();
            this.d = [["M", x - this.offset.x, y - this.offset.y]];
            this.path.attr(this.props.attr);
            this.path.attr({
                path: this.d
            });
            this.moving = true;
            this.set.push(this.path);
        }
    }, {
        key: 'handleMove',
        value: function handleMove(dx, dy, x, y, e) {
            if (this.moving) {
                this.d.push(["L", x - this.offset.x, y - this.offset.y]);
                this.path.attr({
                    path: this.d
                });
            }
            this.moving = true;
        }
    }, {
        key: 'handleEnd',
        value: function handleEnd(e) {
            this.moving = false;
        }
    }, {
        key: 'clear',
        value: function clear() {
            if (!this.set) return;
            for (var i = 0; i < this.set.items.length; i++) {
                this.set.items[i].remove();
            }
            this.set.clear();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                width = _props.width,
                height = _props.height;

            return React.createElement(
                Paper,
                { ref: 'paper', width: width, height: height },
                React.createElement(Rect, { x: 0, y: 0, width: width, height: height, drag: { move: this.handleMove, start: this.handleStart, end: this.handleEnd } })
            );
        }
    }]);

    return Scrawl;
}(React.Component);

Scrawl.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    attr: React.PropTypes.object
};

Scrawl.defaultProps = {
    width: 600,
    height: 400,
    attr: { "stroke": "#000", "stroke-width": 6 }
};

module.exports = Scrawl;