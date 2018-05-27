import React, { Component } from 'react';
import marked from 'marked'
import '../css/markdownViewer.css'
import PropTypes from 'prop-types'

export default class MarkdownViewer extends Component
{
    static propTypes={
        title:PropTypes.string,
        rawContent:PropTypes.string
    }

    render(){
        const article=(this.props.title?('# '+this.props.title+'\n<hr>'):"")+this.props.rawContent;
        return(
            <div
                className='markdownViewer'
                dangerouslySetInnerHTML={{__html:marked(article,
                                                        {breaks:true,
                                                         sanitize:false}) }}>
            </div>

        )
    }
}