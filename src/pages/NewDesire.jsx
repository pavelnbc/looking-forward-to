import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink, Redirect } from 'react-router-dom';
import { ControlLabel, FormControl } from 'react-bootstrap';

import Button from '../components/Button'

class NewDesire extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isFinished: false
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSendBtn = this.handleSendBtn.bind(this);
    }

    handleSendBtn(event) {
        if(event.target.value) {
            this.checkButton.style.opacity = 1
        } else if(!event.target.value) {
            this.checkButton.style.opacity = 0.25
        }
    }

    handleAdd(event) {
        event.preventDefault();

        if(this.title.value) {
            this.props.handleAdd(this.title.value, this.textA.value);
            this.setState({
                isFinished: true
            });
            this.title.value = this.textA.value = '';
        }
    }

    render() {
        return (
            this.state.isFinished
            ? <Redirect to="/"/>
            : <main className="new-desire">
                <header className="header">
                    <NavLink to="./">
                        <Button icon="long-arrow-left"/>
                    </NavLink>
                    <h3>New Desire</h3>
                    <div ref={(div) => this.checkButton = div}>
                        <Button icon="check" action={this.handleAdd}/>
                    </div>
                </header>
                <form onSubmit={this.handleAdd}>
                    <ControlLabel>Please, put your new desire...</ControlLabel>
                    <FormControl inputRef={(input) => this.title = input}
                                 type="text"
                                 placeholder="Looking forward to..."
                                 onChange={this.handleSendBtn}
                    />
                    <ControlLabel>Please, describe your feelings, which you want to experience on the road to your dream...</ControlLabel>
                    <FormControl inputRef={(textA) => this.textA = textA} componentClass="textarea" rows="10" placeholder="Tell me your dreams..."/>
                </form>
              </main>
        )
    }
}

NewDesire.propTypes = {
    handleAdd: PropTypes.func
};

export default NewDesire