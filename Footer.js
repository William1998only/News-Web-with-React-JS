import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
//cara import css
import './App.css'

class Footer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: {},
//       Movie: [],
//       Image: 'images/img_1.jpg',
//       title: 'General',
//       category: 'general',
//       categories: [],
//     };
//   }

//   componentDidMount() {
//     axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=10&apiKey=d8ee47eaa0b94b9ba97bbea8c3eb38ff')
//     .then(res => {
//       const categories = res.data.articles;
//       console.log(categories);
//       this.setState({ categories });
//     })
//   }

  render() {
    return (
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-5">
                    <h2 class="footer-heading mb-4">About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                  </div>
                  <div class="col-md-3 ml-auto">
                    <h2 class="footer-heading mb-4">Quick Links</h2>
                    <ul class="list-unstyled">
                      <li><a href="#about-section" class="smoothscroll">Terms</a></li>
                      <li><a href="#about-section" class="smoothscroll">Policy</a></li>
                      <li><a href="#about-section" class="smoothscroll">About Us</a></li>
                      <li><a href="#services-section" class="smoothscroll">Services</a></li>
                      <li><a href="#testimonials-section" class="smoothscroll">Testimonials</a></li>
                      <li><a href="#contact-section" class="smoothscroll">Contact Us</a></li>
                    </ul>
                  </div>
                  <div class="col-md-3 footer-social">
                    <h2 class="footer-heading mb-4">Follow Us</h2>
                    <a href="https://google.com" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                    <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                    <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                    <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <h2 class="footer-heading mb-4">Subscribe Newsletter</h2>
                <form action="#" method="post" class="footer-subscribe">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row pt-5 mt-5 text-center">
              <div class="col-md-12">
                <div class="border-top pt-5">
                  <p class="copyright"><small>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}</small></p>
            
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;

