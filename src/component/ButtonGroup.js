import React,{Component} from 'react'
import PropTypes from 'prop-types'
import '../css/ButtonGroup.css'
import icon_title from '../img/icon_title.svg'
import icon_quote from '../img/icon_quote.svg'
import icon_img from '../img/icon_img.svg'
import icon_code from '../img/icon_code.svg'
import icon_link from '../img/icon_link.svg'
import icon_bold from'../img/icon_bold.svg'
import icon_italic from '../img/icon_italic.svg'
import  icon_list from '../img/icon_list.svg'
import icon_delete from '../img/icon_delete.svg'

export default class ButtonGroup extends Component
{
    static propTypes={
        buttonController:PropTypes.array.isRequired
    }

    render()
    {          //order: 0             1           2       3           4           5         6         7       8
        const imgSrc = [icon_title,icon_italic,icon_bold,icon_delete,icon_quote,icon_link,icon_img,icon_code,icon_list];
        const imgAlt = ['标题','斜体','粗体','删除','引用','链接','图片','代码','列表'];
        return(
            <div className='button_wrapper'>
                <div className='tool'>
                {imgSrc.map((currentSrc,i)=>{
                    return <button onClick={this.props.buttonController[i]} key={i}>
                                <div className='button_content'>
                                    <img src={currentSrc} alt={imgAlt[i]}/><span>{imgAlt[i]}</span>
                                </div>
                            </button>})}
                </div>
                <div className='save_and_publish'>
                    <button onClick={this.props.buttonController[9]}>保存</button>
                    <button>发布</button>
                </div>
            </div>
        )
    }
}