import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state= {}
    // }

    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 1,
            meat: 1
        }
    }    

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;