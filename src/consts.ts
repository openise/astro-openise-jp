import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "openise.jp",
  DESCRIPTION: "openise.jpのページ",
  EMAIL: "info.openise@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "openise.jpのページ",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "記事一覧",
};

export const TAGS: Metadata = {
  TITLE: "Tags",
  DESCRIPTION: "タグ一覧",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "このサイトについて",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/openisejp",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/openise",
  },
];





const me:string = "openise";

export const RepoPath: string = "/astro-openise-jp";

interface SiteMeta {
  title: string;
  author: string;
  description: string;
  language: "ja-jp";
  theme: "system" | "dark" | "light";
  siteUrl: string;
  siteRepo: string;
  siteLogo: string; // TODO: '/static/images/logo.png',
  image: string; // TODO: '/static/images/avatar-ega.png',
  socialBanner: string;
  email: string;
  github: string;
  X: string;
  locale: "ja-JP";
}

export const siteMeta: SiteMeta = {
  title: "openise.jp",
  author: `${me}.jp`,
  description: "openise.jpのホームページ",
  language: "ja-jp",
  theme: "system", // system, dark or light
  siteUrl: "https://openise.jp",
  siteRepo: `https://github.com/${me}${RepoPath}`,
  siteLogo: "", // TODO: '/static/images/logo.png',
  image: "/images/avatar-ega.png",
  socialBanner: "/images/undraw.png", // TODO: '/static/images/twitter-card.png',
  email: "info.openise@gmail.com",
  github: `https://github.com/${me}`,
  X: `https://x.com/${me}jp`,
  locale: "ja-JP"
};

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "/HOME",
    path: `/`,
  },
  {
    title: "/BLOG",
    path: `/blog`,
  },
  {
    title: "/TAGS",
    path: `/tags`,
  },
  {
    title: "/ABOUT",
    path: `/about`
  }
];

interface Link {
  href: string;
  title: string;
}

export const footerLinks: Link[] = [
  { href: "/", title: "ホーム" },
  { href: "/about", title: "このサイトについて" },
  { href: "/privacy", title: "プライバシーポリシー" },
  { href: "/feed.xml", title: "フィード" },
  { href: `https://github.com/${me}`, title: "GitHub" },
  { href: `https://x.com/${me}jp`, title: "X" }
];


type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/openise/astro-openise-jp",
  },
  {
    icon: "mdi:twitter",
    friendlyName: "X",
    link: "http://x.com/openisejp",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:info.openise@gmail.com",
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];