import React, {Component} from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Lorem ipsum \n=======\n\nconsectetur adipiscing elit, sed do ' +
            'eiusmod tempor\n-----------\n \n### consectetur adipiscing elit, sed ' +
            'do eiusmod tempor\n \nsed do eiusmod tempor\nsed do eiusmod tempor' +
            '\n\nconsectetur adipiscing elit, ' +
            'sed do eiusmod tempor \nconsectetur \n\nconsectetur adipiscing elit, ' +
            'sed do eiusmod tempor *italic*, **bold**, ' +
            '\n`monospace`, ~~strikethrough~~ .\n\nvelit esse cillum dolore ' +
            'eu \n\n  * pariatur\n  * pariatur\n  ' +
            '* pariatur\n\nExcepteur sint\n\n  1. pariatur\n ' +
            ' 2. pariatur\n  3. pariatur\n\nExcepteur sint ' +
            'occaecat cupidatat non \n\n '
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    rawMarkup(value) {
        var rawMarkup = marked(value, {
            sanitize: true
        });
        return {
            __html: rawMarkup
        };
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h1 className="h">Markdown Previewer</h1>
                <div className="row">
                    <div className="col-md-6">

        <textarea rows="22"
                  onChange={this.handleChange}
                  ref="textarea"
                  value={this.state.value}
        /></div>
                    <div className="col-md-6">

                        <div
                            className="content"
                            dangerouslySetInnerHTML=
                                {this.rawMarkup(this.state.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;