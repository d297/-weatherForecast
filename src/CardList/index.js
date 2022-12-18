import React from 'react';
import { Card } from '../Card';
import '../App.css';
// import { GlobalContext } from '../App';


export class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy: 'asc'
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event){
        this.setState({
            orderBy: event.target.value
        })
    }


    render() {
        const {citiesList} = this.props;
        const {orderBy} = this.state;
        let sortedCitiesList = citiesList.sort();
        if(orderBy === 'desc'){
            sortedCitiesList.reverse();
        }
        return (
            <>
                <select className='Select' value={orderBy} onChange={this.handleOnChange}>
                    <option value="desc">By name desc</option>
                    <option value="asc">By name asc</option>
                </select>
                <div className="CardList">
                    {
                       citiesList.map(city => <Card key={city} city={city} />)
                    }
                </div>
            </>
        );
    }
}

/*
export const CardList = () => {
    const {state} = useContext(GlobalContext);
    const {citiesList} = state;
    return (
        <div className="CardList">
            {
                citiesList.map(city => <Card key={city} city={city}  />)
            }
        </div>
    );
};
*/


