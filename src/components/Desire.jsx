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

        this.onEditDesire = this.onEditDesire.bind(this);
        this.onSendComment = this.onSendComment.bind(this);
    }

    onEditDesire(event) {
        event.preventDefault();

        this.props.onEdit(this.props.data.id, this.title.value)
    }

    onSendComment(event) {
        if(event.keyCode === 13 || event.keyCode === undefined) {       // undefined - для клика мыши
            this.props.addComment(this.props.data.id, this.textArea.value);
            this.textArea.value = ""
        }
    }

    componentDidUpdate() {
        if(this.props.data.isEditing) {
            this.title.select();
        } else {
            this.textArea.focus()
        }
    }

    componentDidMount() {
        window.addEventListener("click", event => {
            if (
                !event.target.classList.contains("fa-pencil") &&
                event.target.tagName !== "INPUT" &&
                this.title
            ) {
                this.props.onEdit(this.props.data.id, this.title.value);
            }
        });
    }

    render() {
        let { data, onDelete, onCheck, openEditForm, openDescriptionField } = this.props;

        let desireClass = classNames({
            desire: true,
            "desire-completed": data.isCompleted
        });

        let descriptionClass = classNames({
            "description-is-closed": true,
            "description-is-opened": data.isDescriptionOpen
        });

        return (
            data.isEditing
            ? <form className="desire-form" onSubmit={this.onEditDesire}>
                <FormControl type="text" defaultValue={data.title} inputRef={(input) => this.title = input}/>
                <FontAwesome name="pencil" onClick={this.onEditDesire}/>
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
                                 onKeyDown={this.onSendComment}
                    />

                    <div onClick={this.onSendComment}>
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