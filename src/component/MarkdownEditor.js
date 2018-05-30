import React,{Component} from 'react'
import PropTypes from 'prop-types'
import '../css/MarkdownEditor.css'
import ButtonGroup from "./ButtonGroup";

export default class MarkdownEditor extends Component
{
    static defaultProps={
        title:"",
        content:""
    }

    static propTypes ={
        title:PropTypes.string,
        content:PropTypes.string,
        onEditTitle:PropTypes.func.isRequired,
        onEditContent:PropTypes.func.isRequired,
        buttonController:PropTypes.array.isRequired,
        editorOnScroll:PropTypes.func
    }

    componentDidMount()
    {
        this.editorClientHeight = this.textarea.clientHeight;
    }

    componentDidUpdate()
    {
        this.editorScrollHeight = this.textarea.scrollHeight;
    }

    handleTextareaOnScroll()
    {
        let editorHeight = this.editorClientHeight+this.textarea.scrollTop;
        if(this.props.editorOnScroll)
            this.props.editorOnScroll(editorHeight,this.editorScrollHeight);
    }

    handleOnEditContent(event)
    {
        this.props.onEditContent(event,this.handleTextareaOnScroll.bind(this));
    }

    render()
    {
        return(
            <div className='markdownEditor'>
                <div className='title_wrapper'>
                    <label>标题：</label>
                    <input className='title' value={this.props.title} onChange={this.props.onEditTitle}/>
                </div>
                <ButtonGroup buttonController={this.props.buttonController}/>
                <textarea className="content" ref={(textarea)=>{this.textarea = textarea}}
                          value={this.props.content}
                          onChange={this.handleOnEditContent.bind(this)}
                          onScroll={this.handleTextareaOnScroll.bind(this)}/>
            </div>
        )
    }
}