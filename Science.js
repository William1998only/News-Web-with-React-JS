import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
//import { Grid, Divider, Image, Embed, Button, Icon } from 'semantic-ui-react'
import axios from 'axios';
import Header from './Header';
import SiteNavbar from './SiteNavbar';
import Footer from './Footer';
//cara import css
import './App.css'

class Science extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      Movie: [],
      Image: 'images/img_1.jpg',
      title: 'Science',
      category: 'general',
      categories: [],
      articles: [],
    };
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=10&apiKey=d8ee47eaa0b94b9ba97bbea8c3eb38ff')
    .then(res => {
      const categories = res.data.articles;
      console.log(categories);
      this.setState({ categories });
    })
    axios.get('http://localhost:3001/articles')
    .then(res => {
      const articles = res.data;
      console.log(articles);
      this.setState({ articles });
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
                  <h3 class="mb-5">{this.state.title}</h3>
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
  }
}

export default Science;