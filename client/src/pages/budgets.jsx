import React, {Component} from 'react';
import { Container } from 'reactstrap';

const BudgetsPage = () => {
    <title>
        <h1>Budget Tracking</h1>
        </title>

class CreateBudget extends Component {

    constructor(props) {
        super(props);

        this.onChangeBudgetName = this.onChangeBudgetName.bind(this);
        this.onChangeTransactionDescription = this.onChangeTransactionDescription.bind(this);
        this.onChangeTransactionAmount = this.onChangeTransactionAmount.bind(this);
        this.onChangeBudgetTotal = this.onChangeBudgetTotal.bind(this);

        this.state = {
            budget_name: '',
            transaction_description: '',
            transaction_amount: '',
            budget_total: ''
        }
    }
onChangeBudgetName(e) {
    this.state({
        budget_name: e.target.value
    });
}
onChangeTransactionDescription(e) {
    this.state({
        transaction_description: e.target.value
    });
}
onChangeTransactionAmount(e) {
        this.state({
            transaction_amount: e.target.value
        });
}
onChangeBudgetTotal(e) {
    this.state({
        budget_total: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();

    // form submitted

    this.setState({
            budget_name: '',
            transaction_description: '',
            transaction_amount: '',
            budget_total: ''
    })
}

    render() {
        return (
            <div style={{margintop: 20}}>
                <h3>Create New Budget</h3>
                <form onSubmit={this.onSubmit}>
                    <div classname='formgroup'>
                        <label>Budget Name:</label>
                        <input type='text'
                               className='form-control'
                               value={this.state.budget_name}
                               onChange={this.onChangeBudgetName}
                               />
                    </div>
                    <div classname='formgroup'>
                        <label>Transaction Description:</label>
                        <input type='text'
                               className='form-control'
                               value={this.state.transaction_description}
                               onChange={this.onChangeTransactionDescription}
                               />
                    </div>
                    <div classname='formgroup'>
                        <label>Transaction Amount:</label>
                        <input type='text'
                               className='form-control'
                               value={this.state.transaction_amount}
                               onChange={this.onChangeTransactionAmount}
                               />
                    </div>
                    <div classname='formgroup'>
                        <label>Budget Total:</label>
                        <input type='text'
                               className='form-control'
                               value={this.state.budget_total}
                               onChange={this.onChangeBudgetTotal}
                               />
                    </div>
                    {/* buttons for save budget name, add description, add/subtract amount, container with total */}
                </form>
                
            </div>

        )
    }
    
}

};





          
         

export default BudgetsPage;