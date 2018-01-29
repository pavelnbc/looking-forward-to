import React, { Component } from 'react';
import { ListGroupItem, FormControl } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Checkbox from './Checkbox';
import Button from './Button';
import Comments from './Comments';

class Desire extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            isEditing: false,
        });

        this.props.onEdit(this.props.data.id, this.title.value)
    }

    componentDidUpdate() {
        if(this.props.data.isEditing) {
            this.title.select();
        } else {
            this.textArea.focus()
        }
    }

    render() {
        let { data, onDelete, onCheck, openEditForm, openDescriptionField, addComment } = this.props;

        let desireClass = classNames({
            desire: true,
            "desire-completed": data.isCompleted
        });

        let descriptionClass = classNames({
            "description-is-closed": true,
            "description-is-opened": this.props.data.isDescriptionOpen
        });

        return (
            data.isEditing
            ? <form className="desire-form" onSubmit={this.onSubmit}>
                <FormControl type="text" defaultValue={data.title} inputRef={(input) => this.title = input}/>
                <FontAwesome name="pencil" onClick={this.onSubmit}/>
              </form>
            : <div >
                <ListGroupItem className={desireClass}>
                    <Checkbox isCompleted={data.isCompleted} action={() => onCheck(data.id)}/>

                    <span className="title">{data.title}</span>

                    <Button icon='align-right' action={() => openDescriptionField(data.id)}/>

                    <Button icon='pencil' action={() => openEditForm(data.id)}/>

                    <Button icon='trash-o' action={() => onDelete(data.id)}/>
                </ListGroupItem>

                <div className={descriptionClass}>
                    {data.description ? <p>{data.description}</p> : <p>No description</p>}

                    {data.comments
                    ? <Comments comments={data.comments}/>
                    : null
                    }

                    <FormControl inputRef={(text) => this.textArea = text}
                                 className="comment-area"
                                 componentClass="textarea"
                                 rows="1"
                                 wrap="hard"
                                 placeholder="Let me know what you think about this"
                    />

                    <div onClick={() => {
                        addComment(data.id, this.textArea.value);
                        this.textArea.value = ""
                    }}>
                        <FontAwesome name="send"/>
                    </div>
                </div>
              </div>
        )
    }
}

Desire.propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func,
    onCheck: PropTypes.func,
    onEdit: PropTypes.func,
    onEditForm: PropTypes.func,
    onDescriptionField: PropTypes.func,
    addComment: PropTypes.func
};

export default Desire