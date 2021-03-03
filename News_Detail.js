import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
//import { Grid, Divider, Image, Embed, Button, Icon } from 'semantic-ui-react'
import axios from 'axios';
import Header3 from './Header3';
import SiteNavbar from './SiteNavbar';
import Footer from './Footer';
//cara import css
import './App.css'

class News_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      Movie: [],
      Image: 'images/img_1.jpg',
      category: 'general',
      categories: [],
      news_detail: [],
      news_id: this.props.match.params.ID,
      comment: [],
      error: {},
      result: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.backToNews = this.backToNews.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChange(evt){
    const input = this.state.input; // Copy state
    input[evt.target.name] = evt.target.value;
    this.setState({ input });
  }

  validate(dataInput){
    var error = {};
    if(!dataInput.name){
      error.name = "Name is required";
    }
    if (!dataInput.email){
      error.email = "Email is required";
    }
    if (dataInput.email  && !/([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.\-]+).([a-zA-Z0-9]+)/.test(dataInput.email)){
      error.email = "Invalid Email";
    }
    if (!dataInput.message){
      error.message = "Your Comment is Empty";
    }
    return error;
  }

  backToNews(){
    this.setState({result: {}})
  }

  onFormSubmit(){
    const error = this.validate(this.state.input);
    this.setState({ error });

    // ada error, jangan proses data
    if (Object.keys(error).length > 0) return;

    const serverport = {
        Name: this.state.input.name,
        Email: this.state.input.email,
        Message: this.state.input.message,
        news_id: this.props.match.params.ID
    }

    axios.post('http://localhost:3001/comment', serverport)
    .then(res => console.log(res.data));
    this.setState({
        Name: '',
        Email: '',
        Message: '',
    });
    
    this.setState({
      result: this.state.input,
      input: {},
    })
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=10&apiKey=d8ee47eaa0b94b9ba97bbea8c3eb38ff')
    .then(res => {
      const categories = res.data.articles;
      console.log(categories);
      this.setState({ categories });
    })
    axios.get('http://localhost:3001/news_detail/' + this.props.match.params.ID)
    .then(res => {
      const news_detail = res.data;
      console.log(news_detail);
      this.setState({ news_detail });
    })
    axios.get('http://localhost:3001/comments/' + this.props.match.params.ID)
    .then(res => {
      const comment = res.data;
      console.log(comment);
      this.setState({ comment });
    })
    axios.put('http://localhost:3001/view/' + this.props.match.params.ID)
    .then(res => {
      //console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
      //const comment = res.data;
      //console.log(comment);
      //this.setState({ comment });
    })
  }

  render() {
    if (Object.keys(this.state.result).length == 0)
    {
      return (
        <React.Fragment>
        <div class="">
          <Header3/>
          <section class="site-section">
            <div class="container">
              <div class="row">
                <div class="col-md-8 blog-content">
                  <div class="pt-4">
                    <ul class="comment-list">
                    { this.state.news_detail.map(Cat => 
                      <li class="comment" data-aos="fade-up" data-aos-delay="100">
                      <h3 class="mb-5">{Cat.title}</h3>
                      <span class="icon-facebook"> || </span>
                      <span class="icon-twitter"> || </span>
                      <span class="icon-linkedin"> || </span>
                      <span class="icon-instagram"> || </span>
                      <span class="icon-whatsapp"></span>
                        <div class="col-md-16 mt-3">
                          <img src={Cat.urlToImage} width="100%" height="400"/>
                        </div>
                        <div class="col-md-16">
                          <div class="meta">Published at: {Cat.publishedAt}</div>
                          <p>{Cat.content}</p>
                          <p>Creator: {Cat.author} || Verified: {Cat.Verified}</p>
                        </div>
                      </li>
                      )}
                    </ul>
                      <div class="pt-5">
                          <h3 class="mb-5">Comments</h3>
                          <ul class="comment-list">
                          { this.state.comment.map(Cat => 
                              <li class="comment">
                              <div class="comment-body">
                                  <h5>{Cat.Name}</h5>
                                  <div class="meta">{Cat.time}</div>
                                  <p>{Cat.Message}</p>
                              </div>
                              </li>
                          )}
                          </ul>
                          {/* <!-- END comment-list --> */}
                          
                          <div class="comment-form-wrap pt-5">
                              <h3 class="mb-5">Leave a comment</h3>
                              <form action="#" class="p-5 bg-light">
                              <div class="form-group">
                                  <label for="name">Name *</label>
                                  <div className="error"><font color="red">{this.state.error.name}</font></div>
                                  <input type="text" class="form-control" name="name" value={this.state.input.name}
                                    onChange={this.handleInputChange}/>
                              </div>
                              <div class="form-group">
                                  <label for="email">Email *</label>
                                  <div className="error"><font color="red">{this.state.error.email}</font></div>
                                  <input type="text" class="form-control" name="email"
                                    value={this.state.input.email}
                                    onChange={this.handleInputChange}/>
                              </div>
                              <div class="form-group">
                                  <label for="message">Message</label>
                                  <div className="error"><font color="red">{this.state.error.message}</font></div>
                                  <textarea cols="30" rows="10" class="form-control" name="message"
                                    value={this.state.input.message}
                                    onChange={this.handleInputChange}></textarea>
                              </div>
                              <div class="form-group">
                              <Link to={'/News_Detail/' + this.props.match.params.ID}>
                                    <div class="form-group">
                                      <input type="submit" value="Submit" class="btn btn-primary"
                                      onClick={this.onFormSubmit}/>
                                    </div>
                              </Link>
                              </div>
                              </form>
                          </div>
                      </div>
                    <h3 class="mb-5 mt-3">Read More</h3>
                    <ul class="comment-list">
                    { this.state.categories.map(Cat => 
                      <li class="comment" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-md-16">
                          <img src={Cat.urlToImage} width="100%" height="400"/>
                        </div>
                        <div class="col-md-16">
                          <h3>{Cat.title}</h3>
                          <div class="meta">Published at: {Cat.publishedAt}</div>
                          <p>{Cat.description}</p>
                          <p><a href={Cat.url} target='_blank' class="reply">View More</a></p>
                        </div>
                      </li>
                      )}
                    </ul>
                  </div>
                </div>
                <SiteNavbar/>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
        </React.Fragment>
      );
    }else{
      return (
          <div className="section">
          <h1>Your Comment Have Been Added</h1>
              <Link to={'/News_Detail/' + this.props.match.params.ID}>
                  <button className="button" onClick={this.backToNews}>
                      Back to news
                  </button>
              </Link>
          </div>
      );
    }
  }
}

export default News_Detail;

