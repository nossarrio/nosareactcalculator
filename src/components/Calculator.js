import React from 'react'
import Button from './button'

class Calculator extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={values:'', newcompute:false} 
  }

  ButtonClick=(e)=>
  { 
    switch(e.target.value)    
    {
        case '=':
            {
                try
                {
                    this.setState({values:eval(this.state.values)})
                }catch(error)
                {
                    this.setState({values:0})
                }
            }
             break
    
        case 'CLR':
            {
                this.state.newcompute=false
                this.setState({values:''})                     
            }
            break

        case 'DEL':
            {
                this.setState({values:this.state.values.substr(0,this.state.values.length-1)})                     
            }
            break

        case '+MR':
            {
                window.localStorage.setItem('calculator', this.state.values) 
                this.state.newcompute=false
                this.setState({values:''})                     
            }
            break

        case '-MR':
            {                
                this.state.newcompute=false
                this.setState({values:window.localStorage.getItem('calculator')})                     
            }
            break

        default:
        {
            if(this.state.newcompute==true)
            {
                this.state.values=''
                this.state.newcompute=false
            }

            let value=this.state.values+e.target.value;
            this.setState({values:value})
        }
   }
}

  render()
  {
    let minWidth="3"
    let maxnWidth="12"

    let wrapperstyle={padding:5, 
            width:400, 
            borderStyle:'ridge',
            borderWidth:'1px', 
            borderColor:'white', 
            marginLeft:100, 
            marginTop:10, 
            paddingBottom:50,
            paddingTop:20, 
            paddingLeft:10, 
            paddingRight:10,boxShadow:'5px 5px 7px rgba(33, 33, 33, 0.7)'
        }

    return(

      <div style={wrapperstyle} >
        <div style={{fontWeight:'bold'}}>Nosa React Calculator</div>
        <br/>
        <input type="text" style={{textAlign:'right', disabled:'true',fontSize:'50px', padding:50}}  value={this.state.values} className="form-control" ></input>
        <br/>
        <div style={{width:'100%', margin:0}}  className="row show-grid">            
             <Button text="CLR" size={minWidth} ButtonClick={this.ButtonClick} /> 
             <Button text="DEL" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="+MR" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="-MR" size={minWidth} ButtonClick={this.ButtonClick} />
          </div> 
          <hr/>
          <div style={{width:'100%', margin:0}}  className="row show-grid">            
             <Button text="1" size={minWidth} ButtonClick={this.ButtonClick} /> 
             <Button text="2" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="3" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="+" size={minWidth} ButtonClick={this.ButtonClick} />
          </div>
          <br/>
          <div style={{width:'100%', margin:0}}  className="row show-grid">            
             <Button text="4" size={minWidth} ButtonClick={this.ButtonClick} /> 
             <Button text="5" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="6" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="-" size={minWidth} ButtonClick={this.ButtonClick} />
          </div>
          <br/>
          <div style={{width:'100%', margin:0}}  className="row show-grid">            
             <Button text="7" size={minWidth} ButtonClick={this.ButtonClick} /> 
             <Button text="8" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="9" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="/" size={minWidth} ButtonClick={this.ButtonClick} />
          </div>
          <br/>
          <div style={{width:'100%', margin:0}}  className="row show-grid">            
             <Button text="0" size={minWidth} ButtonClick={this.ButtonClick} /> 
             <Button text="." size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="00" size={minWidth} ButtonClick={this.ButtonClick} />
             <Button text="*" size={minWidth} ButtonClick={this.ButtonClick} />
          </div>
          <br/>
          <div style={{width:'100%', margin:0}}  className="row show-grid"> 
              <Button text="=" size={maxnWidth} ButtonClick={this.ButtonClick} />             
          </div>
      </div>
      
    )
  }
}

export default Calculator