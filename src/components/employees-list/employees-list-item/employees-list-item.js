import './employees-list-item.css';
import { Component } from 'react'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    onLike = () => {
        this.setState(({star}) => ({
            star: !star
        }))
    }
    render() {
        const {name, salary, onDelete} = this.props 
        const {increase, star} = this.state;


        let className = 'list-group-item d-flex justify-content-between'
        if (increase){
            className += ' increase'
        }
        if (star){
            className += ' like'
        }
        
        return (
    
            
            <li className={className}>
                <span onClick={this.onLike} className="list-group-item-label ">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;