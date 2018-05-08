import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../App.scss';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1,
      autoplay: true,
      index: 1,
      duration: 4000
    }

    this.texts =
    [{
      name: 'Sarah Hunt',
      text: '"Craze is one of the most complete app packages i have ever come across. I would highly reccomended it to anyone. Maecenas nec condimentum!"'
    },{
      name: 'Sophia Loren',
      text: '"Loren Ipsum dolor sit amet, consectetur adpscing elit. Suspendisse fringilla fringilla nisl congue congue. Maecenas nec condimentum libero!"'
    },{
      name: 'Mariah',
      text: '"Loren Ipsum dolor sit amet, pro aterno adipsci ex. Eros admodum intellegat ex mea, mei wisi nullam ne qui cu aliquid nominavi. Maecenas nec condimentum!"'
    }];
  }

  componentDidMount() {
    let x = window.setInterval(() => {
      this.autoLoad()
    },this.state.duration)
    this.setState({ interval : x })
  }

  componentWillUnmount() {
    let x = window.clearInterval(this.state.interval)
    this.setState({ interval : x })
  }

  changeDot(val) {
    this.state.autoplay === true ? this.componentWillUnmount() : null;
    this.setState({ index: val });
    this.setState({ slideCount: val });
  }

  autoLoad() {
    this.setState({ index: this.state.index + 1 > this.texts.length ? 1 : this.state.index + 1 });
    this.setState({ slideCount: this.state.slideCount + 1 > this.texts.length ? 1 : this.state.slideCount + 1 })
  }

  renderSlide = () => this.texts.map((value, i) => <div key={i} className={this.state.index === i+1 ? 'item-active' : 'item'}><i className="item-text">{this.texts[i].text}</i><div className="item-name">{this.texts[i].name}</div></div>);

  renderDots = () => this.texts.map((value, i) => <span key={i} onClick={() => this.changeDot(i+1)} className={this.state.index === i+1 ? 'dot-active' : 'dot'}></span>);

  render() {
    return (
      <Container className="space-box text-center">
        <div>{ this.renderSlide() }</div>
        <div className="dot-box">{ this.renderDots() }</div>
      </Container>
    );
  }
}

export default Slider;
