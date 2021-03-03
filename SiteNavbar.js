import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
import { Grid, Divider, Image, Embed, Button, Icon } from 'semantic-ui-react'
import axios from 'axios';
//cara import css
import './App.css'

class SiteNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      CAD: [],
      IDR: [],
      USD: [],
      date: [],
    };
  }

  componentDidMount() {
    axios.get(`https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,1642911,6356055,3169070,5128594,6455259,&units=metric&appid=86fece80e38eb2da04e7115a9a195c1e`)
    .then(res => {
    const weather = res.data.list;
    console.log(weather);
    this.setState({ weather});
    })
    axios.get(`https://api.exchangeratesapi.io/latest`)
    .then(res => {
    const CAD = res.data.rates.CAD;
    console.log(CAD);
    this.setState({ CAD });
    const IDR = res.data.rates.IDR;
    this.setState({ IDR });
    const USD = res.data.rates.USD;
    this.setState({ USD });
    const date = res.data.date;
    this.setState({ date });
    })
  }

  render() {
    return (
        <div class="col-md-4 sidebar">
        <div class="sidebar-box">
            <h3 class="pt-3 mb-5">WEATHER</h3>
            <div class="categories">
            <div class="">
            { this.state.weather.map(weath =>
                <div class="slide">
                    <li class="card" data-aos="fade-up" data-aos-delay="100">
                    <div class="card-title text-uppercase text-center" data-aos="fade-up">{weath.name}</div>
                    <p class="card-body desc"  data-aos="fade-up" data-aos-delay="100"><img src={'http://openweathermap.org/img/wn/' + weath.weather[0].icon + '@2x.png'} alt="Image placeholder" class="img-fluid"/>{weath.weather[0].description} {weath.main.temp}°C</p>
                    </li>
                    <div data-aos="fade-up" data-aos-delay="100">
                    </div>
                </div>
            )}
            </div>
            </div>
        </div>
        <div class="sidebar-box">
            <h3 class="mb-3" >CURRENCY</h3>
            <div class="mb-3">Based on EURO</div>
            <div class="mb-3">Last Updated : {this.state.date}</div>
            <div class="categories">
            <div class="">
                <div class="slide">
                    <li>
                    <div class="text-uppercase" data-aos="fade-up" data-aos-delay="100">CAD : {this.state.CAD}</div>
                    </li>
                    <li>
                    <div class="text-uppercase" data-aos="fade-up" data-aos-delay="100">IDR : {this.state.IDR}</div>
                    </li>
                    <li>
                    <div class="text-uppercase" data-aos="fade-up" data-aos-delay="100">USD : {this.state.USD}</div>
                    </li>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
  }
}

export default SiteNavbar;

