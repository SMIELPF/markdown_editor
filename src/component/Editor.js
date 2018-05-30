import React, { Component } from 'react';
import MarkdownViewer from './MarkdownViewer'
import PropTypes from 'prop-types'
import MarkdownEditor from "./MarkdownEditor";

export default class Editor extends Component
{
    static defaultProps={
        title:"",
        content:""
    }

    static propTypes={
        title:PropTypes.string,
        content:PropTypes.string,
        onEditTitle:PropTypes.func.isRequired,
        onEditContent:PropTypes.func.isRequired,
        buttonController:PropTypes.array.isRequired
    }

    constructor()
    {
        super();
        this.state={
            scrollTop:0
        }
    }

    componentDidUpdate()
    {
        this.viewer.scrollTop = this.state.scrollTop;
    }

    handleEditorOnScroll(editorTop,editorScrollHeight)
    {
        let ViewerScrollTop=(editorTop/editorScrollHeight)*this.viewer.scrollHeight-this.viewer.clientHeight;
        console.log('ViewerScrollTop:ViewerScrollTop');
        this.setState({scrollTop:ViewerScrollTop});
    }

    render()
    {
        console.log("Editor render");
        return(
            <div className='editor_wrapper'>
                <div className='editor_area'>
                    <MarkdownEditor
                        title={this.props.title}
                        content={this.props.content}
                        onEditTitle={this.props.onEditTitle}
                        onEditContent={this.props.onEditContent}
                        buttonController={this.props.buttonController}
                        editorOnScroll={this.handleEditorOnScroll.bind(this)}
                        />
                </div>
                <div className='viewer_area'
                     ref={(viewer)=>{this.viewer=viewer}}>
                    <MarkdownViewer title={this.props.title} rawContent={this.props.content}/>
                </div>
            </div>
        )
    }
}