import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import RedditIcon from "@material-ui/icons/Reddit";
import './CSS/Social.css'

const Social = () => {
  return (
    <div className="social">
      <div className="social-icons">
        <div className="icon-container">
          <InstagramIcon style={{fill: "white"}} />
        </div>
        <div className="icon-container">
          <TwitterIcon style={{fill: "white"}}/>
        </div>
        <div className="icon-container">
          <YouTubeIcon style={{fill: "white"}} />
        </div>
        <div className="icon-container">
          <MusicNoteIcon style={{fill: "white"}}/>
        </div>
        <div className="icon-container">
          <RedditIcon style={{fill: "white"}} />
        </div>
      </div>
       <div className="action-list">
           <p>Privacy Policy <span>|</span></p>
           <p>Terms Of Use <span>|</span></p>
           <p>CA Supply Chain Act <span>|</span></p>
           <p>Submit Your Idea <span>|</span></p>
           <p>Cookie Preferences <span>|</span></p>
       </div>
       <p className='copy'>© 2021 Starbucks Coffee Company. All rights reserved.</p>
    </div>
  );
};

export default Social;
