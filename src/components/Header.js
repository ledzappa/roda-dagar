import React, { Component } from 'react';
import styles from './Header.module.css';
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
        <div className={styles.header + ' col-12 header p-0'}>
          <h1 className={styles.h1}>Röda dagar</h1>
          <div
            className={
              styles.yearContainer +
              ' ' +
              (this.state.isSticky ? styles.sticky : '')
            }
            ref={this.myRef}
          >
            <span
              className={styles.yearBtn + ' float-left'}
              onClick={() => this.props.changeYear(-1)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <div className="d-inline-block year">
              {this.props.year} - {this.props.squeezeDays} klämdag
              {this.props.squeezeDays > 1 ? 'ar' : ''}
            </div>
            <span
              className={styles.yearBtn + ' float-right'}
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
