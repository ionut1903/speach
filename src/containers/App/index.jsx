import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Layout } from 'antd';

import HomePage from '../Home/';
import ErrorPage from '../Error';
import SpeachToText from '../SpeachToText/SpeachToText';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCommandChange = this.handleCommandChange.bind(this);
    this.state = {
      command: ""
    }
  }

  handleCommandChange = (command) => {
    this.setState({
      command: command
    });
  };

  wrappedPages = () => {
    const { history } = this.props;
    const command = this.state.command;
    return (
      <Layout className="wrapper">
        <Layout>
          <Content className="content">
            <SpeachToText onCommandChange={this.handleCommandChange} />
            <Switch>
              <Route exact path="/" render={() => <HomePage onCommand={command} history={history} />} />
              <Route component={ErrorPage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  };

  render() {
    return (
      <Switch> <Route path="/" component={this.wrappedPages} /> </Switch>
    );
  }
}

export default withRouter(App);