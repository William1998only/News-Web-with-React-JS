import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
//import { Grid, Divider, Image, Embed, Button, Icon } from 'semantic-ui-react'
import axios from 'axios';
import Header from './Header';
import SiteNavbar from './SiteNavbar';
import Footer from './Footer';
//cara import css
import './App.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      Movie: [],
      Image: 'images/img_1.jpg',
      category: 'general',
      categories: [],
      articles: [],
      top_news1: [],
      top_news2: [],
      top_news3: [],
      verified: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/articles')
    .then(res => {
      const categories = res.data;
      console.log(categories);
      this.setState({ categories });
    })
    axios.get('http://localhost:3001/today')
    .then(res => {
      const articles = res.data;
      console.log(articles);
      this.setState({ articles });
    })
    axios.get('http://localhost:3001/top3')
    .then(res => {
      const top_news1 = res.data[0];
      console.log(top_news1);
      this.setState({ top_news1 });
    })
    axios.get('http://localhost:3001/top3')
    .then(res => {
      const top_news2 = res.data[1];
      console.log(top_news2);
      this.setState({ top_news2 });
    })
    axios.get('http://localhost:3001/top3')
    .then(res => {
      const top_news3 = res.data[2];
      console.log(top_news3);
      this.setState({ top_news3 });
    })
    axios.get('http://localhost:3001/verified')
    .then(res => {
      const verified = res.data;
      console.log(verified);
      this.setState({ verified });
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
                <h3 class="mb-5">Today's Pick</h3>
                  <ul class="comment-list">
                  { this.state.articles.map(Cat => 
                    <li class="comment" data-aos="fade-up" data-aos-delay="100">
                      <div class="col-md-16">
                        <img src={Cat.urlToImage} width="100%" height="400"/>
                      </div>
                      <div class="col-md-16">
                        <h3>{Cat.title}</h3>
                        <div class="meta">Published at: {Cat.publishedAt}</div>
                        <p>{Cat.description}</p>
                        <p>Creator: {Cat.author} || Verified: {Cat.Verified}</p>
                        <Link to={'/News_Detail/' + Cat.ID}><p>View More</p></Link>
                      </div>
                    </li>
                    )}
                  </ul>
                  <h3 class="mb-5">More From Creator</h3>
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
                        <p>Creator: {Cat.author} || Verified: {Cat.Verified}</p>
                        <Link to={'/News_Detail/' + Cat.ID}><p>View More</p></Link>
                      </div>
                    </li>
                    )}
                  </ul>
                  <h3 class="mb-5">Top 3 News</h3>
                  <div class="row align-items-lg-center" >
                    <div class="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
                        <div class="owl-carousel slide-one-item-alt">
                        <img src= {this.state.top_news1.urlToImage} alt="Image" class="img-fluid"/>
                        <img src= {this.state.top_news2.urlToImage} alt="Image" class="img-fluid"/>
                        <img src= {this.state.top_news3.urlToImage}  alt="Image" class="img-fluid"/>
                        </div>
                        <div class="custom-direction">
                        <a href="#" class="custom-prev"><span><span class="icon-keyboard_backspace"></span></span></a><a href="#" class="custom-next"><span><span class="icon-keyboard_backspace"></span></span></a>
                        </div>
                    </div>
                    <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                        <div class="owl-carousel slide-one-item-alt-text">
                          <div>
                              <h2 class="section-title mb-3">01. {this.state.top_news1.title}</h2>
                              <p>{this.state.top_news1.description}</p>

                              <Link to={'/News_Detail/' + this.state.top_news1.ID}><p>View More</p></Link>
                          </div>
                          <div>
                              <h2 class="section-title mb-3">02. {this.state.top_news2.title}</h2>
                              <p>{this.state.top_news2.description}</p>
                              <Link to={'/News_Detail/' + this.state.top_news2.ID}><p>View More</p></Link>
                          </div>
                          <div>
                              <h2 class="section-title mb-3">03. {this.state.top_news3.title}</h2>
                              <p>{this.state.top_news3.description}</p>
                              <Link to={'/News_Detail/' + this.state.top_news3.ID}><p>View More</p></Link>
                          </div>
                        </div>
                    </div>
                    <h3 class="mb-5">Verified Author ✔️</h3>
                    <ul class="comment-list">
                    { this.state.verified.map(Cat => 
                        <li class="comment" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-md-16">
                            <img src={Cat.urlToImage} width="100%" height="400"/>
                        </div>
                        <div class="col-md-16">
                            <h3>{Cat.title}</h3>
                            <div class="meta">Published at: {Cat.publishedAt}</div>
                            <p>{Cat.description}</p>
                            <p>Creator: {Cat.author}</p>
                            <Link to={'/News_Detail/' + Cat.ID}><p>View More</p></Link>
                        </div>
                        </li>
                        )}
                    </ul>
                   </div>
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

export default Home;

