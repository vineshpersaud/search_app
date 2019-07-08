import React,{Component} from 'react';

class Cars extends Component{
  constructor(){
    super()
    this.state = {
      cars : ['Toyota','Honda','Audi','Lexus','Nissan'],
      carsearch : ''
    }
  }

  handleChange = (event) =>{
    this.setState({carsearch: event.target.value});
  }

  render(){
    let search = this.state.cars.filter( (car) => {
      return car.toLowerCase().indexOf(this.state.carsearch.toLowerCase()) !== -1;
      }
    )
    return(
      <div>
        <h1>Cars</h1>
        <label>
          Search Cars:
          <input type="text"
                 value={this.state.carsearch}
                 onChange={this.handleChange}
          />
        </label>
        {search.map(car=>
          <div>
            <h4>{car}</h4>
          </div>
          )
        }
      </div>
    )
  }
}

export default Cars
