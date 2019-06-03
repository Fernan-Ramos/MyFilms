import React, { PureComponent } from 'react';

const imagePath = 'https://image.tmdb.org/t/p/';

class MovieImage extends PureComponent {
  getImageType = (type) => {
    switch (type) {
      case 'xs':
        return 'w92';
      case 'sm':
        return 'w154';
      case 'ms':
        return 'w342';
      case 'md':
        return 'w342';
      case 'lg':
        return 'w500';
      case 'xl':
        return 'w780';
      case 'poster':
        return 'w500_and_h282_face';
      default:
        break;
    }
  };

  render() {
    const { image, size } = this.props;
    const type = this.getImageType(size);
    return <img src={`${imagePath}${type}${image}`} alt="" />;
  }
}

export default MovieImage;
