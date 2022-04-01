import { Logo, Instagram, Twitter, Discord, OpenSea } from "../Icons";
import NFTCalendar from "../Icons/NFTCalendar";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li className='footer-logo'>
          <Logo />
        </li>
        <li>
          <ul className='footer-icons'>
            <li>
              <a href="https://opensea.io/collection/honsbuns" rel="noreferrer" target="_blank">
                <span>
                  <OpenSea />
                </span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/honsbuns" rel="noreferrer" target="_blank">
                <span>
                  <Twitter />
                </span>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/SUbwbYbsYd" rel="noreferrer" target="_blank">
                <span>
                  <Discord />
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thehonsbuns/" rel="noreferrer" target="_blank">
                <span>
                  <Instagram />
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="nftcalendar">
        <span>as seen on</span>
        <a href="https://nftcalendar.io/event/hons-buns/" rel="noreferrer" target="_blank">
          <NFTCalendar />
        </a>
      </div>
      {/* <p className="footer-text">Hon&#39;s Buns &copy;2022 - All Rights Reserved</p> */}
    </footer>
  )
}