import { useState } from "react";
import HeaderStyles from "@styles/Header.module.css";
import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import Spotify from "@components/Spotify";
import DadJoke from "@components/DadJoke";
import { useRouter } from "next/router";
import { Config } from "@utils/Config";
import Image from "next/image";

const LOGO_URL = "https://images.ctfassets.net/f37i8279gxv6/4Vf1oOaCqYL27OMSYxBPj7/3f1737e2eae123559867128f10b6dc49/LuceCarter_Logo_Wordmark_Orange_RGB.png";

export default function Header() {
  const router = useRouter();
  
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleHambuger() {
    setMenuOpen(!menuOpen);
  }

  const hamburgerClasses = menuOpen
    ? `${HeaderStyles.hamburger} ${HeaderStyles.is__open}`
    : `${HeaderStyles.hamburger}`;

  const navLinksClasses = menuOpen
    ? `${HeaderStyles.header__navList}`
    : `${HeaderStyles.header__navList} ${HeaderStyles.header__navList__hide}`;

  return (
    <>
      <header className={HeaderStyles.header}>
          <Link legacyBehavior  href="/">
            <a
              className={HeaderStyles.header__logoContainerLink}
              aria-label="Navigate to home page"
            >
              <Image src={LOGO_URL} alt="Luce Carter Logo" height="1080" width="1920" layout="responsive" priority="true" />
            </a>
          </Link>

        <div className={HeaderStyles.header__dadJokeContainer}>
          <DadJoke />
        </div>
        
        <nav className={HeaderStyles.header__nav} role="navigation">
          <button
            className={hamburgerClasses}
            onClick={() => toggleHambuger()}
            aria-expanded={menuOpen}
            aria-label="Hamburger Menu Toggle"
            aria-controls="headerLinks"
            type="button">
              <span className={HeaderStyles.hamburger__box}>
            <span className={HeaderStyles.hamburger__inner}></span>
          </span>
          <span className={HeaderStyles.hamburger__text}>Menu</span>
        </button>

          <ul className={navLinksClasses}>
          {Config.menuLinks.map((link) => {
            const isActive =
              (router.pathname === Config.pageMeta.post.slug &&
                link.path === Config.pageMeta.blogIndex.slug) ||
              router.pathname === link.path;

            const isActiveClass = isActive
              ? ` ${HeaderStyles.header__navListItem__active}`
              : "";

            return (
              <li
                key={link.displayName}
                className={HeaderStyles.header__navListItem + isActiveClass}
              >
                <Link legacyBehavior  href={link.path}>
                  <a className={HeaderStyles.header__navListItemLink}>
                    {link.displayName}
                  </a>
                </Link>
              </li>
            );
          })}
             <li className={HeaderStyles.header__navListItem}>
            <a
              href="https://www.getrevue.co/profile/luce/"
              className={HeaderStyles.header__navListItemLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to my newsletter"
            >
              Newsletter
            </a>
          </li>
          </ul>
        </nav>
      </header>
      <SocialLinks />
      <Spotify />     
  </>
  );
}
