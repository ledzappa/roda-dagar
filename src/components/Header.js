import React, { Component } from 'react';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll(), {
      passive: true,
    });
    console.log(this.state);
  }

  handleScroll() {
    const bcr = this.myRef.current.getBoundingClientRect();
    if (!this.state.isSticky && bcr.y < 0) {
      this.setState(() => ({
        isSticky: true,
      }));
    } else if (this.state.isSticky && window.scrollY < 56) {
      this.setState(() => ({
        isSticky: false,
      }));
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 header p-0">
          <h1>Röda dagar</h1>
          <div
            className={
              'year-container' + (this.state.isSticky ? ' sticky' : '')
            }
            ref={this.myRef}
          >
            <span
              className="year-btn float-left"
              onClick={() => this.props.changeYear(-1)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <div className="d-inline-block year">
              {this.props.year} - {this.props.squeezeDays} klämdag
              {this.props.squeezeDays > 1 ? 'ar' : ''}
            </div>
            <span
              className="year-btn float-right"
              onClick={() => this.props.changeYear(1)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
