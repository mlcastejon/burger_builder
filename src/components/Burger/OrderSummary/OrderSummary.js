import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

//We're going to render this modal window when it's necessary but not before. 
//We change this component into a class with a method in order we can use lifecycle. 

class OrderSummary extends Component {
    // This could be a functional component and it doesn't need to be a class. 
    componentWillUpdate() {
        console.log('bababa');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]} </li>
                
        });
    

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchasedCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button> 
            </Aux>
        )
    
    }
    
    
};


export default OrderSummary;