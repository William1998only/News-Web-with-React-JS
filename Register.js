import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
//import { Grid, Divider, Image, Embed, Button, Icon } from 'semantic-ui-react'
import axios from 'axios';
import Header3 from './Header3';
import SiteNavbar from './SiteNavbar';
import Footer from './Footer';
//cara import css
import './App.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      // Movie: [],
      // Image: 'images/img_1.jpg',
      // category: 'general',
      categories: [],
      // news_detail: [],
      // news_id: this.props.match.params.ID,
      comment: [],
      error: {},
      result: {},
      same: {},
      Username_Same: '',
      Email_Same: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.backToRegister = this.backToRegister.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChange(evt){
    const input = this.state.input; // Copy state
    input[evt.target.name] = evt.target.value;
    this.setState({ input });
    axios.get('http://localhost:3001/email/' + this.state.input.email)
    .then(res => {
      console.log(res.data.length)
      console.log(this.state.input.email)
      if(res.data.length > 0) {
        const Email_Same = 'Email have been registered';
        // console.log(Email_Same)
        this.setState({ Email_Same });
        this.state.same.email = 'Email have been registered'
      }
      else { this.setState({ Email_Same: ''})}
    })
    axios.get('http://localhost:3001/username/' + this.state.input.username)
    .then(res => {
      // console.log(res.data.length)
      // console.log(this.state.input.username)
      if(res.data.length > 0) {
        const Username_Same = 'Username have been taken';
        // console.log(Username_Same)
        this.setState({ Username_Same });
        this.state.same.username = 'Username have been taken'
      }
      else { this.setState({ Username_Same: ''})}
    })
    
  }

  validate(dataInput){
    var error = {};
    // const serverport = {
    //   Username: this.state.input.username,
    // }
    // axios.get('http://localhost:3001/username/' + this.state.input.username)
    // .then(res => {
    //   // console.log(res.data.length)
    //   // console.log(this.state.input.username)
    //   if(res.data.length > 0) {
    //     const Username_Same = 'Username have been taken';
    //     // console.log(Username_Same)
    //     this.setState({ Username_Same });
    //   }
    //   else { this.setState({ Username_Same: ''})}
    // })
    // axios.get('http://localhost:3001/email/' + this.state.input.email)
    // .then(res => {
    //   // console.log(res.data.length)
    //   // console.log(this.state.input.email)
    //   if(res.data.length > 0) {
    //     const Email_Same = 'Email have been registered';
    //     // console.log(Email_Same)
    //     this.setState({ Email_Same });
    //   }
    //   else { this.setState({ Email_Same: ''})}
    // })
    if(!dataInput.username){
      error.username = "Username is required";
    }
    if (!dataInput.email){
      error.email = "Email is required";
    }
    if (dataInput.email  && !/([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.\-]+).([a-zA-Z0-9]+)/.test(dataInput.email)){
      error.email = "Invalid Email";
    }
    if (!dataInput.password){
      error.password = "Your Password is Empty";
    }
    return error;
  }

  validate_same(dataInput){
    var same = {};
    axios.get('http://localhost:3001/username/' + this.state.input.username)
    .then(res => {
      // console.log(res.data.length)
      // console.log(this.state.input.username)
      if(res.data.length > 0) {
        const Username_Same = 'Username have been taken';
        // console.log(Username_Same)
        this.setState({ Username_Same });
        same.username = 'Username have been taken'
      }
      else { this.setState({ Username_Same: ''})}
    })
    axios.get('http://localhost:3001/email/' + this.state.input.email)
    .then(res => {
      console.log(res.data.length)
      console.log(this.state.input.email)
      if(res.data.length > 0) {
        const Email_Same = 'Email have been registered';
        // console.log(Email_Same)
        this.setState({ Email_Same });
        same.email = 'Email have been registered'
      }
      else { this.setState({ Email_Same: ''})}
    })
    if(this.state.Username_Same != ""){
      same.username = "Username have been taken";
    }
    if (this.state.Email_Same != ""){
      same.email = "Email have been registered";
    }
    return same;
  }

  backToRegister(){
    this.setState({result: {}})
  }

  onFormSubmit(){
    const error = this.validate(this.state.input);
    this.setState({ error });
    const same = this.validate_same(this.state.input);
    this.setState({same});
    console.log(Object.keys(error).length + 'error punya')
    console.log(Object.keys(same).length + 'same punya')
    // console.log(this.state.Username_Same + 'Username')
    // console.log(this.state.Email_Same + 'Email') 
    // ada error, jangan proses data
    if (Object.keys(error).length > 0 || Object.keys(same).length > 0)
      return;
    // if (Object.keys(error).length > 0) return;
    // if (this.state.Username_Same != '') return;
    // if (this.state.Email_Same != '') return;
    else{
      const serverport = {
          Name: this.state.input.username,
          Email: this.state.input.email,
          Password: this.state.input.password,
          Status: 'Creator',
          Verified: 'No'
      }

      axios.post('http://localhost:3001/register', serverport)
      .then(res => console.log(res.data));
      this.setState({
          Email: '',
          Username: '',
          Password: '',
      });
      
      this.setState({
        result: this.state.input,
        // input: {},
      })
    }
  }

  componentDidMount() {
    //axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=10&apiKey=d8ee47eaa0b94b9ba97bbea8c3eb38ff')
    // .then(res => {
    //   const categories = res.data.articles;
    //   console.log(categories);
    //   this.setState({ categories });
    // })
    // axios.get('http://localhost:3001/news_detail/' + this.props.match.params.ID)
    // .then(res => {
    //   const news_detail = res.data;
    //   console.log(news_detail);
    //   this.setState({ news_detail });
    // })
    // axios.get('http://localhost:3001/comments/' + this.props.match.params.ID)
    // .then(res => {
    //   const comment = res.data;
    //   console.log(comment);
    //   this.setState({ comment });
    // })
    // axios.put('http://localhost:3001/view/' + this.props.match.params.ID)
    // .then(res => {
    //   //console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
    //   //const comment = res.data;
    //   //console.log(comment);
    //   //this.setState({ comment });
    // })
  }

  render() {
    if (Object.keys(this.state.result).length == 0)
    {
      return (
        <React.Fragment>
        <div class="">
          <section class="site-section">
            <div class="container">
              <div class="row">
                <div class="col-md-8 blog-content">
                          <div class="comment-form-wrap">
                              <h3 class="mb-5">Register Now</h3>
                              <form action="#" class="p-5 bg-light">
                              <div class="form-group">
                                  <label for="email">Email *</label>
                                  <div className="error"><font color="red">{this.state.error.email}</font></div>
                                  <div className="error"><font color="red">{this.state.same.email}</font></div>
                                  <input type="text" class="form-control" name="email"
                                    value={this.state.input.email}
                                    onChange={this.handleInputChange}/>
                              </div>
                              <div class="form-group">
                                  <label for="name">Username *</label>
                                  <div className="error"><font color="red">{this.state.error.username}</font></div>
                                  <div className="error"><font color="red">{this.state.same.username}</font></div>
                                  <input type="text" class="form-control" name="username" value={this.state.input.username}
                                    onChange={this.handleInputChange}/>
                              </div>
                              <div class="form-group">
                                  <label for="name">Password *</label>
                                  <div className="error"><font color="red">{this.state.error.password}</font></div>
                                  <input type="password" class="form-control" name="password" value={this.state.input.password}
                                    onChange={this.handleInputChange}/>
                              </div>
                              <div class="form-group">
                              <Link to={'/Register'}>
                                    <div class="form-group">
                                      <input type="submit" value="Submit" class="btn btn-primary"
                                      onClick={this.onFormSubmit}/>
                                    </div>
                              </Link>
                              </div>
                              </form>
                          </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </React.Fragment>
      );
    }else{
      return (
        <React.Fragment>
        <div class="">
          <section class="site-section">
            <div class="container">
              <div class="row">
                <div class="col-md-8 blog-content">
                  <div class="comment-form-wrap">
                      <h3 class="mb-5">Your Account Have Been Registered</h3>
                      <a href={'/Register'} class="nav-link">Back to register</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </React.Fragment>
      );
    }
  }
}

export default Register;

