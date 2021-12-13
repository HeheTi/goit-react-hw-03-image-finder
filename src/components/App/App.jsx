import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Button from '../Button';
import { fetchImagesApi } from '../../api/api.js';

class App extends Component {
  state = {
    pictures: [],
    largeImageURL: '',
    serchD: 'nature',
  };

  componentDidUpdate(provProps, prevState) {
    if (prevState.serchD !== this.state.serchD) {
      fetchImagesApi(this.state.serchD).then(data =>
        this.setState({ pictures: data.hits }),
      );
    }
  }

  onTakeBigPict = bigImg => {
    this.setState({ largeImageURL: bigImg });
  };

  onTakeDataForSerch = name => {
    return this.setState({ serchD: name });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onTakeDataForSerch} />
        <ImageGallery
          pictures={this.state.pictures}
          onClick={this.onTakeBigPict}
        />
        {/* <Modal /> */}
        <Loader
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
        <Button />
      </div>
    );
  }
}

export default App;
