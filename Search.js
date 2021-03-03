import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
//import { Grid, Divider, Image, Embed, Button, Icon } from 'semantic-ui-react'
import axios from 'axios';
import Header from './Header';
import SiteNavbar from './SiteNavbar';
import Footer from './Footer';
//cara import css
import './App.css'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      Movie: [],
      Image: 'images/img_1.jpg',
      title: 'Search',
      category: 'general',
      categories: [],
      articles: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  handleInputChange(evt){
    const input = this.state.input; // Copy state
    input[evt.target.name] = evt.target.value;
    this.setState({ input });
  }

  onFormSubmit() {
    axios.get('https://newsapi.org/v2/everything?q=' + this.state.input.search + '&apiKey=d8ee47eaa0b94b9ba97bbea8c3eb38ff')
      .then(res => {
        const categories = res.data.articles;
        console.log(this.state.input.search)
        console.log(categories);
        this.setState({ categories });
    })
  }

  render() {
    return (
      <React.Fragment>
      <div class="">
        <Header/>
        <section class="site-section">
          <div class="container">
            <div class="row">
              <div class="col-md-8 blog-content">
                <div class="pt-4">
                    <input type="text" name="search" placeholder="Search everything"
                    value={this.state.input.search}
                    onChange={this.handleInputChange} />
                    <button className="btn btn-dark ml-3"
                    value="Submit"
                    onClick={this.onFormSubmit}>Search
                    </button>
                  <ul class="comment-list mt-2">
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
  }
}

export default News;

