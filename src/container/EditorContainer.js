import React, { Component } from 'react';
import Editor from '../component/Editor'
import Header from '../component/Header'
import markdown from '../img/markdown.svg'
import '../css/Editor.css'

export default class EditorContainer extends Component
{
    constructor()
    {
        console.log("constructor")
        super()
        this.state={
                title:"",
                content:""}
    }

    componentWillMount()
    {
        console.log("componentWillMount");
        this._loadArticle();
    }

    handleOnEditTitle(event)
    {
        this.setState({title:event.target.value});
    }

    handleOnEditContent(event,scrollFunc)
    {
        console.log('onEditContent');
        this.setState({content:event.target.value});
        scrollFunc();
    }


    _saveArticle()//将title和content存储到localStorage中
    {
        localStorage.setItem('title',this.state.title);
        localStorage.setItem('content',this.state.content);
    }

    _loadArticle()//从localStorage中加载title和content
    {
        const title=localStorage.getItem('title');
        const content=localStorage.getItem('content');
        if(title)
            this.setState({title:title});
        if(content)
            this.setState({content:content});
    }

    controller(order)
    {
        let text = "";
        switch(order)
        {
            case 0://插入标题
                text='# 标题';
                break;
            case 1://插入斜体字
                text='*斜体*';
                break;
            case 2://插入粗体字
                text='**粗体**';
                break;
            case 3://插入删除线
                text='~~删除线~~';
                break;
            case 4://插入引用
                text='\n>引用\n\n';
                break;
            case 5://插入链接
                text='[文字](链接)';
                break;
            case 6://插入图片
                text='![图片描述](图片链接)';
                break;
            case 7://插入代码
                text = '\n```\n代码\n```\n';
                break;
            case 8://插入列表
                text ='\n* 列表项1\n* 列表项2\n* 列表项3\n'
                break;
            case 9://保存文本
                this._saveArticle();
                alert("保存成功，您下次可以继续编辑");
                break;
            default:
                break;
        }
        this.setState((prevState)=>{return{content:prevState.content+text}});
    }

    render()
    {
        const buttonController=[];
        for(let i=0;i<=9;i++)
        {
            buttonController.push(this.controller.bind(this,i));
        }
        return(
            <div className='outer_wrapper'>
                <Header logo={markdown} title="Philip Lau's Markdown Editor"/>
                <Editor
                    title={this.state.title}
                    content={this.state.content}
                    onEditTitle={this.handleOnEditTitle.bind(this)}
                    onEditContent={this.handleOnEditContent.bind(this)}
                    buttonController={buttonController}/>
            </div>
        )
    }
}