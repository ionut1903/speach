import React, { Component } from 'react';

class HomePage extends Component {
  state = {
    lastID: null,
    guideStatus: false,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.toggleGuideStatus, false);

    this.createElement('row', 'header');

    this.createElement('box', 'headerContent', 'header');
    this.createElement('image', 'image', 'headerContent');

    this.createElement('row', 'article');
    this.createElement('box', 'subtitle', 'article');
    this.createElement('title', 'headerTitle', 'subtitle', 'Where does it come from?', 'left');
    this.createElement('text', 'headerTitle', 'subtitle', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');

    this.createElement('row', 'articleDescription');
    this.createElement('box', 'subtitleContent', 'articleDescription');
    this.createElement('subtitle', 'headerTitle', 'subtitleContent', 'Where does it come from?', 'left');
    this.createElement('text', 'headerTitle', 'subtitleContent', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');

    this.createElement('box50', 'article1', 'subtitleContent');
    this.createElement('subtitle', 'headerTitle', 'article1', 'Where does it come from?', 'left');
    this.createElement('text', 'article1Text', 'article1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');
    this.createElement('button', 'cta1', 'article1', 'View More', 'left');


    this.createElement('box50', 'article2', 'subtitleContent');
    this.createElement('subtitle', 'article2Text', 'article2', 'Where does it come from?', 'left');
    this.createElement('text', 'article1Text', 'article2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');
    this.createElement('button', 'cta2', 'article2', 'View More', 'left');

    this.createElement('row', 'imageDetails');
    this.createElement('box', 'imageDetailsContainer', 'imageDetails');

    this.createElement('box50', 'imageContainer', 'imageDetailsContainer');
    this.createElement('image', 'image', 'imageContainer');


    this.createElement('box50', 'textContainer', 'imageDetailsContainer');
    this.createElement('subtitle', 'article2Text', 'textContainer', 'Where does it come from?', 'left');
    this.createElement('text', 'article1Text', 'textContainer', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');
    this.createElement('subtitle', 'article2Text', 'textContainer', 'Where does it come from?', 'left');
    this.createElement('text', 'article1Text', 'textContainer', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');

    this.createElement('row', 'imageDetailsInversion');
    this.createElement('box', 'imageDetailsContainerInversion', 'imageDetailsInversion');

    this.createElement('box50', 'textContainerInv', 'imageDetailsContainerInversion');
    this.createElement('subtitle', 'article2Text', 'textContainerInv', 'Where does it come from?', 'left');
    this.createElement('text', 'article1Text', 'textContainerInv', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');
    this.createElement('subtitle', 'article2Text', 'textContainerInv', 'Where does it come from?', 'left');
    this.createElement('text', 'article1Text', 'textContainerInv', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'left');

    this.createElement('box50', 'imageContainerInv', 'imageDetailsContainerInversion');
    this.createElement('image', 'image', 'imageContainerInv');


    this.createElement('row', 'multipleImages');
    this.createElement('box', 'multipleImagesContainer', 'multipleImages');
    this.createElement('box25', '25-1', 'multipleImagesContainer');
    this.createElement('image', 'image', '25-1');
    this.createElement('box25', '25-2', 'multipleImagesContainer');
    this.createElement('image', 'image', '25-2');
    this.createElement('box25', '25-3', 'multipleImagesContainer');
    this.createElement('image', 'image', '25-3');
    this.createElement('box25', '25-4', 'multipleImagesContainer');
    this.createElement('image', 'image', '25-4');

    this.createElement('row', 'footer');
    this.createElement('box', 'footerContent', 'footer');
    this.createElement('text', 'copyright', 'footerContent', 'Copyright 2019. All rights reserved.');
  }

  downloadHtmlTemplate = (filename, elementId, mimeType, style) => { 

    let elementHtml = document.getElementById(elementId).innerHTML;
    let link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    let htmlHead = "<!DOCTYPE html><html><head><title>Page Title</title> " + style + "</head><body>";
    let htmlBody = "<h1>My First Heading</h1><p>My first paragraph.</p></body></html>"

    let html = htmlHead + elementHtml + htmlBody;
    let blob = new Blob([html], { type: 'plain/text' });
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  componentWillUnmount() {
    window.addEventListener("keydown", this.toggleGuideStatus, false);
    this.getCommandStructure();
  }

  toggleGuideStatus = (e) => {
    const { guideStatus } = this.state;
    this.setState({ guideStatus: !guideStatus });
  };

  componentWillReceiveProps(nextProps) {
    this.parseCommandStructure(nextProps.onCommand);
  }

  getIndexOfPredefinedWords(listOfWords) {
    let predefinedWordsIndex = {
      createIndex: -1,
      asIndex: -1,
      inIndex: -1,
      withIndex: -1,
      onIndex: -1
    };

    for (var i = 0; i < listOfWords.length; i++) {
      if (listOfWords[i] === "create") {
        predefinedWordsIndex.createIndex = i;
      }
      if (listOfWords[i] === "as") {
        predefinedWordsIndex.asIndex = i;
      }
      if (listOfWords[i] === "in") {
        predefinedWordsIndex.inIndex = i;
      }
      if (listOfWords[i] === "with") {
        predefinedWordsIndex.withIndex = i;
      }
      if (listOfWords[i] === "on") {
        predefinedWordsIndex.onIndex = i;
      }
    };

    return predefinedWordsIndex;
  }

  getElementFromCommand(firstIndex, secondIndex, listOfWords) {
    let elementType = "";
    let count = 0;

    if (firstIndex !== -1 & secondIndex === -1) {
      var startPoint = firstIndex + 1;
      while (startPoint <= listOfWords.length - 1) {
        count++;
        elementType += listOfWords[startPoint] + " ";
        startPoint++;
      }

      // TODO: create a method.
      if ((count >= 2 & listOfWords[firstIndex] === 'with') | (count >= 2 & listOfWords[firstIndex] === 'on')) {
        return elementType.trim();
      } else if (count >= 2) {
        elementType = this.transformIntoCamelCase(elementType);
      }
    }

    if (firstIndex !== -1 & secondIndex !== -1) {
      for (var i = firstIndex + 1; i < secondIndex; i++) {
        count++;
        elementType += listOfWords[i] + " ";
      }
      if ((count >= 2 & listOfWords[firstIndex] === 'with') | (count >= 2 & listOfWords[firstIndex] === 'on')) {
        return elementType.trim();
      } else if (count >= 2) {
        elementType = this.transformIntoCamelCase(elementType);
      }
    }

    return elementType.trim();
  }

  transformIntoCamelCase = (str) => {
    return str.split(' ').map(function (word, index) {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }

  parseCommandStructure(command) {
    let listOfCommands = command.split(" ");
    console.log(listOfCommands);

    if (listOfCommands[0] === "create") {
      //get indexes for predefined words
      console.log(this.getIndexOfPredefinedWords(listOfCommands));
      let predefinedWordsIndexes = this.getIndexOfPredefinedWords(listOfCommands);

      let elementType = this.getElementFromCommand(predefinedWordsIndexes.createIndex, predefinedWordsIndexes.asIndex, listOfCommands);
      let elementId = this.getElementFromCommand(predefinedWordsIndexes.asIndex, predefinedWordsIndexes.inIndex, listOfCommands);
      let nodeId = this.getElementFromCommand(predefinedWordsIndexes.inIndex, predefinedWordsIndexes.withIndex, listOfCommands);

      let elementContent = this.getElementFromCommand(predefinedWordsIndexes.withIndex, predefinedWordsIndexes.onIndex, listOfCommands);
      let style = this.getElementFromCommand(predefinedWordsIndexes.onIndex, -1, listOfCommands);

      this.createElement(elementType, elementId, nodeId, elementContent, style);
    }

    if (listOfCommands[0] === "restart" & listOfCommands[1] === "page") {
      window.location.reload();
    }

    // DELETE BY ID
    if (listOfCommands[0] === "delete") {
      this.removeElement(listOfCommands[1]);
    }

    if (listOfCommands[0] === "toggle" && listOfCommands[1] === "guide") {
      this.toggleGuideStatus();
    }

    if (listOfCommands[0] === "download" & listOfCommands[1] === "page") {
      var fileName = 'MarvelousTemplate.html';

      let style = document.getElementsByTagName("style")[document.getElementsByTagName("style").length - 1].outerHTML;
      this.downloadHtmlTemplate(fileName, 'enmagine', 'text/html', style);
    }
  }

  createElement(type, id, node = 'enmagine', content = '', position = '') {
    let currentNode, element, elementType, elementPosition;

    switch (type) {
      case 'row': case 'box': case 'box50': case 'box33': case 'box25':
        elementType = 'div';
        elementPosition = position && `elements-${position}`;
        break;
      case 'button':
        elementType = 'button';
        elementPosition = position && `single-${position}`;
        break;
      case 'title':
        elementType = 'h1';
        elementPosition = position && `text-${position}`;
        break;
      case 'subtitle':
        elementType = 'h3';
        elementPosition = position && `text-${position}`;
        break;
      case 'text':
        elementPosition = position && `text-${position}`;
        elementType = 'p';
        break;
      case 'image':
        elementPosition = position;
        elementType = 'div';
        break;
      default: return null;
    }

    element = document.createElement(elementType);
    if (type === 'image') {
      // mai facem validari pe tipul de imagine
      element.setAttribute("style", `
        background:url('https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg') no-repeat center center;
        background-size: cover;
      `);
    }

    element.id = id;
    element.className = `guide ${type} ${elementPosition}`;
    element.innerHTML = content;

    currentNode = document.getElementById(node);

    if (currentNode) {
      currentNode.appendChild(element);
      this.setState({ lastID: id });
    }
    return null;
  }

  removeElement(id) {
    //delete by class name
    const item = document.getElementById(id);
    if (item) {
      item.parentNode.removeChild(item);
    }
  }

  render() {
    const { guideStatus } = this.state;
    return (
      <div id="enmagine" className={guideStatus ? 'show-guides' : 'hide-guides'}>
      </div>
    );
  }
}

export default HomePage;