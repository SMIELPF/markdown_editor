import React, { Component } from 'react';
import MarkdownViewer from './MarkdownViewer'
import PropTypes from 'prop-types'

export default class Editor extends Component
{
    static propTypes={
        title:PropTypes.string,
        content:PropTypes.string,
        onEditTitle:PropTypes.func.isRequired,
        onEditContent:PropTypes.func.isRequired
    }

    render()
    {
        return(
            <div className='editor_wrapper'>
                <div className='edit_area'>
                    <div className='title_wrapper'>
                        <label>标题：</label>
                        <input
                            className='title'
                            value={this.props.title}
                            onChange={this.props.onEditTitle}/>
                    </div>
                    <textarea
                        className="content"
                        value={this.props.content}
                        onChange={this.props.onEditContent}/>
                </div>
                <div className='markdownProcessed_area'>
                    <MarkdownViewer  title={this.props.title} rawContent={this.props.content}/>
                </div>
            </div>
        )
    }



}
