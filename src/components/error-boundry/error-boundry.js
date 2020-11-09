import React, { Component } from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {       // создаем границу ошибок

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {

        if (this.state.error) {
            return <Error />
        }

        return this.props.children;     // отрендим все, что внутри компонента ErrorBoundry
    }
}