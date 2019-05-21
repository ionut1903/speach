import React, { Component } from 'react';

export default class SpeachToText extends Component {

    onCommand = (command) => {
        this.props.onCommandChange(command);
    };

    componentDidMount() {
        var message = document.getElementById('message');

        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;';

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        const that = this;

        recognition.onresult = function (event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            message.textContent = 'Voice Input: ' + command + '.';

            that.onCommand(command);
        };

        recognition.onspeechend = function () {
            recognition.stop();
        };

        recognition.onerror = function (event) {
            message.textContent = 'Error occurred in recognition: ' + event.error;
        };

        document.getElementById('btnGiveCommand').addEventListener('click', function () {
            // that.onCommand("create box50 as image box in header content");
            // that.onCommand("create image as image header in header content");
            // that.onCommand("create title as title header in header content with Hello world on center");
            // that.onCommand("download page");
            that.onCommand("create title as title header in header content with Hello Hello on center");
            // that.onCommand("toggle guide");
            // that.onCommand("restart page");
            // that.onCommand("delete iddddd");


            // recognition.start();
        });
    }

    render() {
        return (
            <div style={{ width: "100%", height: "80px", background: "white" }}>
                <button id='btnGiveCommand'>Give Command!</button>
                <br /><br />
                <span id='message'></span>
                <br />
            </div>
        )
    };
}





