import React,{Component} from 'react'
import PropTypes from 'prop-types'
import '../css/Header.css'

export default class Header extends Component
{

    static propTypes={
        logo:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
    }

    render()
    {
        return(
            <header>
                <div className='header_content'>
                    <div className='left'>
                        <img src={this.props.logo} alt=''/> {this.props.title}
                    </div>
                </div>
            </header>
        )
    }
}