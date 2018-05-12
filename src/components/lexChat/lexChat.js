import React, { Component} from 'react';
import PropTypes from 'prop-types';
import AWS from 'aws-sdk';
import "./lexChat.css";


class LexChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            lexUserId: 'chatbot-demo' + Date.now(),
            sessionAttributes: {}, visible: 'open'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.getElementById("inputField").focus();
        AWS.config.region = this.props.region || 'us-east-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.props.IdentityPoolId,
        });
        var lexruntime = new AWS.LexRuntime();
        this.lexruntime = lexruntime;
        this.greetChat();


    }

    handleClick() {
        this.setState({ visible: this.state.visible == 'open'? 'closed' : 'open' });
        console.log(this.state);
    }

    greetChat() {
        // event.preventDefault();
        var  utterance = 'Hi! How Can I Help You...';
        // send it to the Lex runtime
        var params = {
            botAlias: '$LATEST',
            botName: this.props.botName,
            inputText: utterance,
            userId: this.state.lexUserId,
            sessionAttributes: this.state.sessionAttributes
        };
        //this.showRequest(utterance);
        var a = function(err, data) {
            if (err) {
                console.log(err, err.stack);
                this.showError('Error:  ' + err.message + ' (see console for details)')
            }
            if (data) {
                // capture the sessionAttributes for the next cycle
                this.setState({sessionAttributes: data.sessionAttributes})
                //sessionAttributes = data.sessionAttributes;
                // show response and/or error/dialog status
                this.showResponse(data);
            }
            // re-enable input

        };

        this.lexruntime.postText(params, a.bind(this));
        // we always cancel form submission
        return false;
    }

    pushChat(event) {
        event.preventDefault();

        var inputFieldText = document.getElementById('inputField');

        if (inputFieldText && inputFieldText.value && inputFieldText.value.trim().length > 0) {

            // disable input to show we're sending it
            var inputField = inputFieldText.value.trim();
            inputFieldText.value = '...';
            inputFieldText.locked = true;

            // send it to the Lex runtime
            var params = {
                botAlias: '$LATEST',
                botName: this.props.botName,
                inputText: inputField,
                userId: this.state.lexUserId,
                sessionAttributes: this.state.sessionAttributes
            };
            this.showRequest(inputField);
            var a = function(err, data) {
                if (err) {
                    console.log(err, err.stack);
                    this.showError('Error:  ' + err.message + ' (see console for details)')
                }
                if (data) {
                    // capture the sessionAttributes for the next cycle
                    this.setState({sessionAttributes: data.sessionAttributes})
                    //sessionAttributes = data.sessionAttributes;
                    // show response and/or error/dialog status
                    this.showResponse(data);
                }
                // re-enable input
                inputFieldText.value = '';
                inputFieldText.locked = false;
            };

            this.lexruntime.postText(params, a.bind(this));
        }
        // we always cancel form submission
        return false;
    }

    showRequest(daText) {
        var conversationDiv = document.getElementById('conversation');
        var requestPara = document.createElement("P");
        requestPara.className = 'userRequest';
        requestPara.appendChild(document.createTextNode(daText));
        conversationDiv.appendChild(requestPara);
        conversationDiv.scrollTop = conversationDiv.scrollHeight;
    }

    showError(daText) {

        var conversationDiv = document.getElementById('conversation');
        var errorPara = document.createElement("P");
        errorPara.className = 'lexError';
        errorPara.appendChild(document.createTextNode(daText));
        conversationDiv.appendChild(errorPara);
        conversationDiv.scrollTop = conversationDiv.scrollHeight;
    }

    showResponse(lexResponse) {

        var conversationDiv = document.getElementById('conversation');
        var responsePara = document.createElement("P");
        responsePara.className = 'lexResponse';
        if (lexResponse.message) {
            responsePara.appendChild(document.createTextNode(lexResponse.message));
            responsePara.appendChild(document.createElement('br'));
        }
        if (lexResponse.dialogState === 'ReadyForFulfillment') {
            responsePara.appendChild(document.createTextNode('Ready for fulfillment'));
            // TODO:  show slot values
        } else {
            responsePara.appendChild(document.createTextNode(
                ''));
        }
        conversationDiv.appendChild(responsePara);
        conversationDiv.scrollTop = conversationDiv.scrollHeight;
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({data: event.target.value});
    }

    render() {

        const inputStyle = {
            padding: '7px',
            fontSize: 15,
            width: '100%',
            height: '30px',
            borderRadius: 'px',
            border: '10px'
        }

        const conversationStyle = {
            display:'block',
            width: '100%',
            height: this.props.height,
            border: 'px solid #FFFF00',
            backgroundColor: 'white',
            padding: '4px',
            overflow: 'scroll',
            borderBottom: 'thin ridge #bfbfbf',
            // borderRadius:'10px'

        }

        const headerRectStyle = {
            backgroundColor: '#1289fe',
            width: '100%',
            height: '26px',
            textAlign: 'center',
            padding: '3px 3px 3px 3px',
            color: '#FFFFFF',
            fontSize: '13px',
            // borderRadius:'10px'
        }

        const chatcontainerStyle = {
            backgroundColor: '#F5F5DC',
            width: '100%'
        }

        const chatFormStyle = {
            margin: 'px',//no effect
            padding: 'px', // no effect


        }



        return (
            <div id="chatwrapper"  >
                <div id="chat-header-rect" style={headerRectStyle} onClick={this.handleClick} >{this.props.headerText}
                    {(this.state.visible === 'open') ? <span className='chevron top'></span> : <span className='chevron bottom'></span>}
                </div>
                <div id="chatcontainer" className={this.state.visible} style={chatcontainerStyle}>
                    <div id="conversation" style={conversationStyle} ></div>
                    <form id="chatform" style={chatFormStyle} onSubmit={this.pushChat.bind(this)}>
                        <input type="text"
                               id="inputField"
                               size="20"
                               value={this.state.data}
                               placeholder={this.props.placeholder}
                               onChange={this.handleChange.bind(this)}
                               style={inputStyle}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

LexChat.propTypes = {
    botName: PropTypes.string.isRequired,
    IdentityPoolId: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    height: PropTypes.number,
    headerText: PropTypes.string
}

export default LexChat;