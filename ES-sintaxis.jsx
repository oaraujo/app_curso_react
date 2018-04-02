// Sintaxis de JSX en ES5 , ES6 , ES7

//ES5
var MyComponentStateful = React.createClass({  
    propTypes: {...},
    getDefaultProps: {...},
    getInitialState: function () {...},
    render: function () {...}
})

var MyComponentStateless = function (props) {  
    return (...)
}

// ES6

class MyComponentStateful extends React.Component {  
    constructor (...props) {
        super(...props)
        this.state = {...}
    }
    render () {...}
}

MyComponentStateful.propTypes = {...}
MyComponentStateful.defaultProps = {...}

const MyComponentStateless = (...props) => {...}

// ES7

class MyComponentStateful extends React.Component {  
    static propTypes = {...}
    static defaultProps = {...}
    state = {...}
    constructor (...props) {
        super(...props);
    }
    render () {...}
}

const MyComponentStateless = (...props) => {...}

