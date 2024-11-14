import React, { useEffect } from 'react';
import Player from '../components/Player';
import BlogPreview from '../components/BlogPreview';

// Main functional component for the Home page
const Home: React.FC = () => {
  useEffect(() => {
    // Create a script element to load the Spinitron widget
    const script = document.createElement('script');
    script.src = 'https://widgets.spinitron.com/static/js/widget.js'; // Source of the Spinitron widget script
    script.async = true; // Load the script asynchronously
    document.body.appendChild(script); // Append the script to the document body

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };

  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <>
      <div>
        {/* tags for responsive design and SEO */}
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta name="description" content="Demonstration of the custom layout feature of Spinitron for seamless integration of playlists, calendar, etc." />

        {/* external stylesheets */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.teal-amber.min.css" />
        <link rel="stylesheet" href="styles.css" />

        {/* inline styles for a fixed position element */}
        <style>
          {`
            #view-source {
              position: fixed; // Fixes the element's position
              display: block; // Ensures the element is displayed
              right: 0; // Aligns to the right
              bottom: 0; // Aligns to the bottom
              margin-right: 40px; // Adds space from the right edge
              margin-bottom: 40px; // Adds space from the bottom edge
              z-index: 900; // Ensures it is on top of other elements
            }
          `}
        </style>

        {/* main body with material design classes for styling */}
        <body className="test-website mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
          <div className="mdl-layout mdl-js-layout">
            <header className="mdl-layout__header mdl-layout__header--scroll">
              <div className="mdl-layout__header-row">
                <h3 className="mdl-layout-title">Brown Studio Radio Schedule</h3>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation">
                  {/* nav links to show and event info, and calendar */}
                  <a className="mdl-navigation__link" href="https://programs.testradio.org/WBRU/?layout=1">Show Info</a>
                  <a className="mdl-navigation__link" href="https://programs.testradio.org/WBRU/calendar?layout=1"> Calendar</a>
                </nav>
              </div>
            </header>

            <main className="mdl-layout__content">
              <div className="mdl-layout__tab-panel is-active" id="overview">
                {/* section displaying current on-air show */}
                <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                  <div className="mdl-card mdl-cell mdl-cell--12-col">
                    <div className="mdl-card__supporting-text">
                      <h4> <b> Now Live: </b></h4>
                      {/* spinitron widget for showing the currently playing track */}
                      
                      <div className="on-air-container">
                        <Player />
                        <div className="program-info">
                          
                          <b> currently playing </b>
                          
                          <div className="on-air-container"> </div>
                          <div data-station="wbru" data-count="1" data-action="upcoming-shows" 
                              data-description="1" className="spinitron-js-widget"></div>
                        </div>
                      </div>
  </div>
                    <div className="mdl-card__actions">
                      {/* link to see more information about the on-air show */}
                      <a href="https://programs.testradio.org/WBRU/?layout=1" 
   className="mdl-button"
   style={{ position: 'relative', left: '620px' }}>
   See more
</a>
                    </div>
                  </div>
                </section>

                {/* section displaying upcoming shows */}
                <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp center">
                  <div className="mdl-card mdl-cell mdl-cell--12-col">
                    <div className="mdl-card__supporting-text center">
                      <h4> <b> On Air/Up Next </b></h4>
                      {/* spinitron widget for displaying NEXT FIVE upcoming shows */}

                      <div data-station="WBRU" data-count="5" data-action="upcoming-shows" data-layout="1" data-server="programs.testradio.org" className="spinitron-js-widget shows-box"></div>
                    </div>
                    <div className="mdl-card__actions">
                      {/* link to see the full schedule of upcoming shows */}
                      <a href="https://programs.testradio.org/WBRU/calendar?layout=1" className="mdl-button"
   style={{ position: 'relative', left: '-70px' }}>
   See Full Schedule</a>
                    </div>
                  </div>
                </section>
                
              </div>
            </main>
          </div>
        </body>
      </div>
    </>
  );
};

export default Home; // Exporting the Home component for use in other parts of the application
