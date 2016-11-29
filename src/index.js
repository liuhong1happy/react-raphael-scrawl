require('../less/style.less')
const React = require('react');
const ReactDOM = require('react-dom');
const { Paper,Rect } = require('react-raphael');

class Scrawl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        }
    }
    componentDidMount(){
        this.handleStart = this.handleStart.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.setState({
			loaded: true
		})
    }
    handleStart(x,y,e){
        this.paper = this.refs.paper.getPaper();
        var container = this.paper.canvas.parentElement;
        this.offset = {
            x: container.offsetLeft,
            y: container.offsetTop
        }
        if(!this.set) this.set = this.paper.set();
        this.path = this.paper.path();
        this.d = [["M",x-this.offset.x,y-this.offset.y]];
        this.path.attr(this.props.attr);
        this.path.attr({
            path: this.d
        });
        this.moving = true;
        this.set.push(this.path);
    }
    handleMove(dx,dy,x,y,e){
        if(this.moving){
            this.d.push(["L",x-this.offset.x,y-this.offset.y]);
            this.path.attr({
                path: this.d
            });
        }
        this.moving = true;
    }
    handleEnd(e){
        this.moving = false;
    }
    clear(){
        if(!this.set) return;
        for(var i=0;i<this.set.items.length;i++){
            this.set.items[i].remove();
        }
        this.set.clear();
    }
    render(){
        var {width,height} = this.props;
        return (<Paper ref="paper" width={width} height={height}>
            <Rect x={0} y={0} width={width} height={height} drag={{move: this.handleMove,start: this.handleStart,end: this.handleEnd }}/>        
        </Paper>)
    }
}

Scrawl.propTypes = { 
	width: React.PropTypes.number, 
	height: React.PropTypes.number,
    attr: React.PropTypes.object
};

Scrawl.defaultProps = { 
	width: 600, 
	height: 400,
    attr: {"stroke": "#000","stroke-width": 6}
}

module.exports = Scrawl;