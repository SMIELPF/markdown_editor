import React, { Component } from 'react';
import MarkdownViewer from './MarkdownViewer'
import PropTypes from 'prop-types'
import MarkdownEditor from "./MarkdownEditor";

export default class Editor extends Component
{
    static propTypes={
        title:PropTypes.string,
        content:PropTypes.string,
        onEditTitle:PropTypes.func.isRequired,
        onEditContent:PropTypes.func.isRequired,
        buttonController:PropTypes.array.isRequired
    }

    render()
    {
        return(
            <div className='editor_wrapper'>
                <MarkdownEditor
                    title={this.props.title}
                    content={this.props.content}
                    onEditTitle={this.props.onEditTitle}
                    onEditContent={this.props.onEditContent}
                    buttonController={this.props.buttonController}/>
                <div className='markdownProcessed_area'>
                    <MarkdownViewer  title={this.props.title} rawContent={this.props.content}/>
                </div>
            </div>
        )
    }



}
