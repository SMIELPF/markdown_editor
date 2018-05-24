import React, { Component } from 'react';
import Editor from '../component/Editor'

export default class EditorContainer extends Component
{
    constructor()
    {
        super()
        this.state={
            title:"",
            content:""
    }
    }

    handleOnEditTitle(event)
    {
        this.setState({title:event.target.value});
    }

    handleOnEditContent(event)
    {
        this.setState({content:event.target.value});
    }

    render()
    {
        return(
            <Editor
                title={this.state.title}
                content={this.state.content}
                onEditTitle={this.handleOnEditTitle.bind(this)}
                onEditContent={this.handleOnEditContent.bind(this)}/>
        )
    }
}