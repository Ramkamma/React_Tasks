/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import * as configs from '../../configs/constants';
import * as utils from '../../lib/utils/math';
import { data } from './style';

class SliderComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
    };
  }

  componentDidMount() {
    if (this.props.banners.length > 0) {
      this.timer = setInterval(() => {
        this.getRandomNumber();
      }, this.props.duration);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getRandomNumber() {
    this.setState((state, props) => ({
      randomNumber: this.props.random
        ? utils.getRandomNumber(props.banners)
        : utils.getNextRoundRobin(props.banners, state.randomNumber),
    }));
  }

  render() {
    const {
      altText, banners, defaultBanner, duration, height, random,
    } = this.props;
    return (
      <div style={data.aline_center}>
        <img src={banners.length > 0 ? banners[this.state.randomNumber] : this.props.defaultBanner} height={height} alt={altText} srcSet="" />
      </div>
    );
  }
}
SliderComp.defaultProps = {
  altText: 'Default Banner',
  banners: [
    `${configs.PUBLIC_IMAGE_FOLDER}cloud.jpg`,
    `${configs.PUBLIC_IMAGE_FOLDER}js.jpg`,
    `${configs.PUBLIC_IMAGE_FOLDER}load-balancer.png`,
    `${configs.PUBLIC_IMAGE_FOLDER}full-stack-web-development.jpg`,
  ],
  defaultBanner: configs.DEFAULT_BANNER_IMAGE,
  duration: 2000,
  height: 200,
  random: false,
};
SliderComp.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf,
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};
export default SliderComp;
