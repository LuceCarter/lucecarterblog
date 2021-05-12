import HeaderStyles from "@styles/Header.module.css";
import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import Spotify from "@components/Spotify";
import DadJoke from "@components/DadJoke";
import { useRouter } from "next/router";
import { Config } from "@utils/Config";
import Image from "next/image";

const LOGO_URL = "https://images.ctfassets.net/f37i8279gxv6/1HJrK7EkbnZbp6IU4r0pTV/66f3b6a303e1793735850ed5dbcf8eb5/footer_logo.png";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className={HeaderStyles.header}>
          <Link href="/">
            <a
              className={HeaderStyles.header__logoContainerLink}
              aria-label="Navigate to home page"
            >
              <Image src={LOGO_URL} alt="Luce Carter Logo" height="1080" width="1920" layout="responsive" />
            </a>
          </Link>

        <div className={HeaderStyles.header__dadJokeContainer}>
          <DadJoke />
        </div>
        
        <nav className={HeaderStyles.header__nav} role="navigation">
          <ul className={HeaderStyles.header__navList}>
            {Config.menuLinks.map((link) => {
              const onBlogPost =
                router.pathname === Config.pageMeta.post.slug &&
                link.path === Config.pageMeta.blogIndex.slug;

              const onBlogIndexPage =
                router.pathname === Config.pageMeta.blogIndexPage.slug &&
                link.path === Config.pageMeta.blogIndex.slug;

              const isActive =
                onBlogPost || onBlogIndexPage || router.pathname === link.path;
              const isActiveClass = isActive
                ? ` ${HeaderStyles.header__navListItem__active}`
                : "";

              return (
                <li
                  key={link.displayName}
                  className={HeaderStyles.header__navListItem + isActiveClass}
                >
                  <Link href={link.path}>
                    <a className={HeaderStyles.header__navListItemLink}>
                      {link.displayName}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <SocialLinks />
      <Spotify />     
  </>
  );
}
