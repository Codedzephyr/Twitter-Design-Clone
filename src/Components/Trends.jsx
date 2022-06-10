import React, { useState } from "react";

const Trends = () => {
  const [blue, setBlue] = useState(false);

  const changeColour = () => {
    setBlue(!blue);
  };
  return (
    <React.Fragment>
      <div className="trendsContainer">
        <div className="searchInputcontainer">
          <div className="searchIconContainer">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1.75rem"
              className={
                blue ? "searchBackground" : "serachBackgroundOriginal"
              }
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          <div className="searchInputContainerMini">
            <input
              type="text"
              id="search"
              placeholder="Search Twitter"
              onFocus={changeColour}
              onBlur = {changeColour}
            ></input>
          </div>
        </div>
        <div className="listOfTrendsContainer">
          <div className="TrendsListItem1">
            <div className="TrendsListItemMini">
              <p className="trendsText">Trends for you</p>
            </div>
            <div className="trendslistItem">
              <div className="leftTrendslistItem">
                <p className="trendsListItemText">Dark drama . Trending</p>
                <p className="trendsListItemText1">#The Boys</p>
                <p className="trendsListItemText2">47.3K Tweets</p>
              </div>
              <div className="rightTrendslistItem">
                <svg
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1.25em"
                >
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="trendslistItem">
              <div className="leftTrendslistItem">
                <p className="trendsListItemText">Gaming . Trending</p>
                <p className="trendsListItemText1">State of Play</p>
                <p className="trendsListItemText2">6,415 Tweets</p>
              </div>
              <div className="rightTrendslistItem">
                <svg
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1.25em"
                >
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="trendslistItem">
              <div className="leftTrendslistItem">
                <p className="trendsListItemText">Gaming. Trending</p>
                <p className="trendsListItemText1">God of War</p>
                <p className="trendsListItemText2">7,629 Tweets</p>
              </div>
              <div className="rightTrendslistItem">
                <svg
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1.25em"
                >
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="trendslistItem">
              <div className="leftTrendslistItem">
                <p className="trendsListItemText">Entertainment. Trending</p>
                <p className="trendsListItemText1">Superman</p>
                <p className="trendsListItemText2">21K Tweets</p>
              </div>
              <div className="rightTrendslistItem">
                <svg
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1.25em"
                >
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="trendslistItem">
              <div className="leftTrendslistItem">
                <p className="trendsListItemText">Entertainment . Trending</p>
                <p className="trendsListItemText1">Captain Jack Sparrow</p>
                <p className="trendsListItemText2">47.3K Tweets</p>
              </div>
              <div className="rightTrendslistItem">
                <svg
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1.25em"
                >
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="trendslistItem">
              <div className="leftTrendslistItem">
                <p className="trendsListItemText">Trending in Nigeria</p>
                <p className="trendsListItemText1">Elon Musk</p>
                <p className="trendsListItemText2">84K Tweets</p>
              </div>
              <div className="rightTrendslistItem">
                <svg
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1.25em"
                >
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="trendslistItem">
              <div className="leftTrendslistItem">
                <p className="trendsListItemText">Gaming .Trending</p>
                <p className="trendsListItemText1">Ghost of Tsushima</p>
                <p className="trendsListItemText2">1.2K Tweets</p>
              </div>
              <div className="rightTrendslistItem">
                <svg
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1.25em"
                >
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBottomFixedTrendsContainer">
          <div className="rightBottomFixedTrendsContainer1">
            <div className="textLeftBottomFixedTrendsContainer">
              <p className="textLeftBottom">Messages</p>
            </div>
            <div className="textrightBottomFixedTrendsContainer">
              <div className="flexEndContents">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="rgb(239, 243, 244)"
                  height="1.75rem"
                >
                  <g>
                    <path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"></path>
                  </g>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="rgb(239, 243, 244)"
                  height="1.75rem"
                >
                  <g>
                    <path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path>
                    <path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Trends;
