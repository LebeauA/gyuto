import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  loadHome(){
    window.location.href="https://pedroseromenho.github.io/gyuto/";
}

  render() {
    setTimeout(() => {
      this.setState({ display: true })
    }, 100)
    return (
      <Fragment>
        <div className="loadingScreen">
        <div className="content">
            <div className="loading"></div>
            <svg className="svgLoading" viewBox="0 0 1280 800" width="500px" height="500px">
                <path fill="#f5f5f5" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M1092.365,60.286H177.273V699.35h915.092V60.286z
					M640.999,240.212l52.597-52.596l13.148-13.149l92.041,92.042l-46.407,46.408l-12.376,12.376l-26.298-26.298l32.486-32.486
					l-39.446-39.446l-39.447,39.447l-26.298,26.297l-32.484,32.484l-26.297-26.297l32.484-32.484L640.999,240.212z M575.256,437.443
					l26.298,26.299l32.485,32.484l-26.298,26.297l-32.485-32.484l-26.297-26.297l-32.485-32.486l26.297-26.297L575.256,437.443z
					M608.515,456.781l-26.298-26.299l32.485-32.485L641,371.7l32.485-32.485l26.298,26.297l-32.485,32.485L641,424.295L608.515,456.781
					z M706.744,358.551l-26.298-26.298l-32.485-32.485l26.298-26.298l32.485,32.485l26.298,26.297l32.485,32.485l-26.298,26.298
					L706.744,358.551z M575.256,174.468l13.148,13.148l45.634,45.634l-26.297,26.297l-32.485-32.485l-39.446,39.446l33.259,33.259
					l6.188,6.188l26.298,26.298l32.484,32.484l-26.297,26.298l-32.484-32.485l-26.299-26.298l-19.336-19.336l-46.408-46.408
					L575.256,174.468z M430.62,476.891l-78.894-78.895l92.041-92.041l13.149,13.148l45.635,45.635l-26.298,26.297l-32.485-32.485
					l-39.446,39.446l39.446,39.446l39.446-39.446l26.298-26.297l32.485-32.485l26.297,26.298l-32.484,32.485l-26.298,26.298
					l-65.744,65.744L430.62,476.891z M575.257,621.527l-13.149-13.148l-65.744-65.746l-13.149-13.148l58.783-58.783L568.295,497
					l-32.484,32.486l39.446,39.445l39.446-39.445L641,503.188l32.485-32.484L699.783,497l-32.485,32.486L641,555.783L575.257,621.527z
					M785.637,542.635l-65.744,65.744l-13.148,13.148l-58.783-58.783l26.298-26.297l32.485,32.484l39.446-39.445l-39.446-39.447
					l-26.297-26.297l-32.485-32.486l26.297-26.297l32.485,32.484l26.298,26.299l65.744,65.744L785.637,542.635z M838.231,490.039
					l-58.783-58.783l26.298-26.297l32.485,32.486l39.447-39.448l-39.446-39.447l-39.447,39.447l-26.298,26.298l-32.484,32.484
					l-26.298-26.297l32.484-32.484l26.298-26.298l52.596-52.596l13.149-13.149l92.041,92.042l-78.506,78.507L838.231,490.039z" />
                <rect fill="#f5f5f5" width="237.279" height="800" />
                <rect x="1042.721" fill="#f5f5f5" width="237.279" height="800" />
                <rect x="1" fill="#f5f5f5" width="1280" height="118.64" />
                <rect y="681.36" fill="#f5f5f5" width="1280" height="118.64" />
            </svg>
        </div>
    </div>

        <div className="containerLogo">
          <div className="logo" id="gyuto">
            <Link to="/" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5" onClick={this.loadHome}>Gyütö</Link>
          </div>
          {this.state.display && document.title !== "Gyütö" &&
            <div className="pageName itemsColor">{document.title}</div>
          }
        </div>
      </Fragment>
    );
  }
}

export default Logo;
