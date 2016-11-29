require('./index.less');
var React = require('react');
var ReactDOM = require('react-dom');
var Scrawl = require('../lib/index');
	
class ScrawlApp extends React.Component {
    handleClick(){
        this.refs.scrawl.clear();
    }
    render(){
        return (<div>
        <div>
                <button onClick={this.handleClick.bind(this)}>清除画布</button>
        </div>        
        <Scrawl ref="scrawl"/>
        </div>)
    }
}

ReactDOM.render(<div>
                <ScrawlApp />
                </div>,document.getElementById("react-container"));