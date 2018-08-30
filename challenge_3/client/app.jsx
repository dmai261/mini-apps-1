// var db = require('./server')

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: ''
        }
        this.account = {
            Name: '',
            Email: '',
            Password: '',
        }
        this.address = {
            Line1: '',
            Line2: '',
            City: '',
            State: '',
            'Zip Code': '',
        }
        this.card = {
            'Credit Card Number': '',
            'Date Of Expire': '',
            CVV: '',
            'Billing Zip Code': ''
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    handleChange1(event) {
        this.account[event.target.name] = event.target.value
    }

    handleChange2(event) {
        this.address[event.target.name] = event.target.value
    }

    handleChange3(event) {
        this.card[event.target.name] = event.target.value
    }

    handleCheckout() {
        this.setState({
            currentPage: 'effOne'
        })
    }
    handleEffOne() {
        this.setState({
            currentPage: 'effTwo'
        })
        fetch('http://localhost:8080/account', {
            method: 'POST',
            body: JSON.stringify(this.account), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
    }

    handleEffTwo() {
        this.setState({
            currentPage: 'effThree'
        })
        fetch('http://localhost:8080/address', {
            method: 'POST',
            body: JSON.stringify(this.address), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
    }

    handleEffThree() {
        this.setState({
            currentPage: 'confirm'
        })
        fetch('http://localhost:8080/card', {
            method: 'POST',
            body: JSON.stringify(this.card), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
    }

    handleConfirm() {
        this.setState({
            currentPage: ''
        })
        // fetch('http://localhost:8080/').then(function(response){
        //     return (response.json());
        // }).then(function(data) {
        //     console.log(data);
        // }).catch(function(err) {
        //     console.log(err);
        // })
    }

    render () {
        if (this.state.currentPage === 'effOne') {
            return <EffOne change={this.handleChange1} func1={this.handleEffOne.bind(this)}/>
        } else if (this.state.currentPage === 'effTwo') {
            return <EffTwo change={this.handleChange2} func2={this.handleEffTwo.bind(this)}/>
        } else if (this.state.currentPage === 'effThree') {
            return <EffThree change={this.handleChange3} func3={this.handleEffThree.bind(this)}/>
        } else if (this.state.currentPage === 'confirm') {
            return <ConfirmationPage obj1={this.account} obj2={this.address} obj3={this.card} confirm={this.handleConfirm.bind(this)}/>
        } else {
            return <Checkout func={this.handleCheckout.bind(this)} />
        }
    }
}

function Checkout(props) {
    return <input type="button" value="CheckMeOut" onClick={props.func}></input>
}
//F1 collects name, email, and password for account creation.
function EffOne(props) {
    return (
        <form>
            <header>
                <h1>Account Deets.</h1>
            </header>
            <div>
                <label>Name:</label> <input type='text' name="Name" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                Email: <input type='text' name="Email" onChange={(e)=>{props.change(e)}}></input>
            </div>
            <div>
                Password: <input type='text' name="Password" onChange={(e)=>{props.change(e)}}></input>
            </div>
            <input type="button" value="Next" id="effjuan" onClick={props.func1}></input>
        </form>
    );
}

//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
function EffTwo(props) {
    return (
        <form>
            <header>
                <h1>Address Deets.</h1>
            </header>
            <div>
                Line1: <input type='text' name="Line 1" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                Line2: <input type='text' name="Line 2" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                City: <input type='text' name="City" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                State: <input type='text' name="State" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                Zip Code: <input type='text' name="Zip Code" onChange={(e)=>props.change(e)}></input>
            </div>

            <input type="button" value="Next" id='efftoo' onClick={props.func2}></input>
        </form>
    )
}

//F3 collects credit card #, expiry date, CVV, and billing zip code.
function EffThree(props) {
    return (
        <form>
            <header>
                <h1>Credi Card Deets.</h1>
            </header>
            <div>
                Credit Card #: <input type='text' name="Credit Card Number" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                Expire Date: <input type='text' name="Expiration Date" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                CVV: <input type='text' name="CVV" onChange={(e)=>props.change(e)}></input>
            </div>
            <div>
                Billing Zip Code: <input type='text' name="Billing Zip Code" onChange={(e)=>props.change(e)}></input>
            </div>

            <input type="button" value="Next" id='efftree' onClick={props.func3}></input>
        </form>
    )
}

//Show previous entered information
function ConfirmationPage(props) {
    return (
        <div>
            <header>
                <h1>
                    Confirmation Page
                </h1>
            </header>
            {Object.keys(props.obj1).map(function(item) {
                    return (<div>{item}: {props.obj1[item]}</div>)
            })}
            {Object.keys(props.obj2).map(function(item) {
                    return (<div>{item}: {props.obj2[item]}</div>)
            })}
            {Object.keys(props.obj3).map(function(item) {
                    return (<div>{item}: {props.obj3[item]}</div>)
            })}
            <input type='button' value='Purchase' onClick={props.confirm}></input>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));