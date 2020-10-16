import React from 'react';


export default class TodoItem extends React.Component {
    
  constructor(props){
    super(props);
    
  }

  
  
  
    

  render () {
      const style = {textDecoration: "line-through",
                    fontStyle: "italic",
                    color: "grey"};

      
      return (
          <div className="todo-item">
            <input type="checkbox"  id={this.props.id} name={this.props.id} value={this.propstext} checked={this.props.checked} onChange={(e) => this.props.change(e)}/>
            <label htmlFor={this.props.id} style={this.props.checked ? style : null }>{this.props.text}</label>
          </div>
      )
  }
}