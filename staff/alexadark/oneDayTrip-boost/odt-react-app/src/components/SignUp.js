import React, {Component} from 'react';
// import api from 'odt-api-client'
//TODO import api from node modules

import api from 'odt-api-client'


class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            surname: '',
            email: '',
            picture: '',
            username: '',
            password: ''
        }
    }

    submit(){
       api.registerUser(this.state.name, this.state.surname, this.state.email, this.state.picture, this.state.username, this.state.password);
       console.log('submitted')
    }

    keepName = name => this.setState({name});
    keepSurname = surname => this.setState({surname});
    keepEmail = email => this.setState({email});
    keepPicture = picture => this.setState({picture});
    keepUsername = username => this.setState({username});
    keepPassword = password => this.setState({password});


    render() {
        return (
            <div className="uk-container">
                <h2 className="uk-text-center">Sign Up</h2>
                <form data-uk-grid
                      onSubmit={e => {
                          e.preventDefault();
                          this.submit();
                }}>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input"
                               placeholder="Name"
                               onChange={e => this.keepName(e.target.value)}
                               value={this.state.name}/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input"
                               placeholder="Surname"
                               onChange={e => this.keepSurname(e.target.value)}
                               value={this.state.surname}/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input"
                               placeholder="Email"
                               onChange={e => this.keepEmail(e.target.value)}
                               value={this.state.email}/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input"
                               placeholder="Picture"
                               onChange={e => this.keepPicture(e.target.value)}
                               value={this.state.picture}/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input"
                               placeholder="Username"
                               onChange={e => this.keepUsername(e.target.value)}
                               value={this.state.username}/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input"
                               placeholder="Password"
                               onChange={e => this.keepPassword(e.target.value)}
                               value={this.state.password}/>
                    </div>

                    <div>
                        <input type="submit"
                               className="uk-button uk-button-primary"
                               value="Submit"/>
                    </div>

                </form>
            </div>

        )
    }
}


export default SignUp;