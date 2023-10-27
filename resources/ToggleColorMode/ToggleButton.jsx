import './ToggleButton.css'
import React, { Component } from 'react'

class ToggleButton extends Component {
    constructor (props) {
        super (props)
        this.state = {
            checked: props.checked
        }
    }

    handleCheckboxChange = () => {
        this.setState ((prevState) => ({
            checked: !prevState.checked
        }));
    }

    componentDidMount () {
        const script = document.createElement ('script')
        script.src = 'https://code.iconify.design/1/1.0.4/iconify.min.js'
        script.async = true
        document.body.appendChild (script)
    }

    render () {
        return (
            <div className='main'>
                <label>
                    <input 
                        className='toggle-checkbox' 
                        type='checkbox'
                        checked={this.props.checked}
                        onChange={this.props.onClick}
                        ></input>
                    <div className='toggle-slot'>
                        <div className='sun-icon-wrapper'>
                            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                        </div>
                        <div className='toggle-button'></div>
                        <div className='moon-icon-wrapper'>
                            <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                        </div>
                    </div>
                </label>
            </div>
        )
  }
}

export default ToggleButton
