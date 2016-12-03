# react-raphael-scrawl

[![Version](https://img.shields.io/npm/v/react-raphael-scrawl.svg)](https://www.npmjs.com/package/react-raphael-scrawl)
[![Downloads](https://img.shields.io/npm/dt/react-raphael-scrawl.svg)](https://www.npmjs.com/package/react-raphael-scrawl)

so easy! create scrawl with react-raphael.

## Install

	# or specify the externals in webpack config
	npm install --save raphael
	# install react-raphael-scrawl in your react-raphael-scrawl project
    npm install --save react-raphael-scrawl
    
## Quickly Start

``` js
var React = require('react');
var ReactDOM = require('react-dom');
var Scrawl = require('react-raphael-scrawl');
	
class ScrawlApp extends React.Component {
    handleClick(){
        this.refs.scrawl.clear();
    }
    render(){
        return (<div>
        <div>
                <button onClick={this.handleClick.bind(this)}>清除画布</button>
        </div>        
        <Scrawl ref="scrawl" width={500} height={600} attr={{"stroke": "#000","stroke-width": 6}} />
        </div>)
    }
}

ReactDOM.render(<div>
                <ScrawlApp />
                </div>,document.getElementById("react-container"));
```

## API

#### All Scrawl Props

- width `number` width of the canvas
- height `number` height of the canvas
- attr `object` attr of the scrawl path, you can see [http://dmitrybaranovskiy.github.io/raphael/reference.html#Element.attr](http://dmitrybaranovskiy.github.io/raphael/reference.html#Element.attr)

#### All Scrawl Ref

- clear `function` clear all scrawl path

## Contact

Email: [liuhong1.happy@163.com](mailto:liuhong1.happy@163.com)