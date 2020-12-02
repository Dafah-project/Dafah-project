import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class Slideshow extends Component {

    render() {
        return(
          <div>
          <Carousel>
          <Carousel.Item interval={1000}>
              <img
              className="d-block w-100"
              src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/20-11-2019_UNICEF-I212395_childrens-day.jpg/image1170x530cropped.jpg"
              alt="First slide"
              width="500" height="600"
              />
          </Carousel.Item>
          <Carousel.Item interval={500}>
              <img
              className="d-block w-100"
              src="https://images.squarespace-cdn.com/content/v1/5f63ae5ea9fd645b792982fc/1601300358943-PT1SEJIDQFCGHTNENIRP/ke17ZwdGBToddI8pDm48kDI6t2ZJ2yXKZo3s6I-0OnMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcXn3hZpBhjiHtOUlxTiB0-l2TFTiqipn0_CFJknl3fXD48weq6CB3FXZyKlgMG3_V/Palestine.jpg"
              alt="Third slide"
              width="500" height="600"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://www.actionagainsthunger.org/sites/default/files/styles/story_header_large/public/images/stories/JO_OTH_2017_Lys_Arango005.jpg?itok=D91i_UJY&timestamp=1521209745"
              alt="Third slide"
              width="500" height="600"
              />
          </Carousel.Item>
      </Carousel>
      </div>
        )
    }
}
        