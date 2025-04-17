import {
  site,
  group,
  separator,
  defineTheme,
  directory,
  siteTemplate,
  social,
  link,
  type SiteComponent,
} from "@neato/guider/theme";
import { Logo } from "./components/Logo";
const template = siteTemplate({
  github: "Itsoon/blog",
  settings: {
    colors: {
      primary: "#A277FF",
      primaryLighter: "#A277FF",
      primaryDarker: "#5607FF",
      background: "#070512",
      backgroundLighter: "#0E0A22",
      backgroundLightest: "#151032",
      backgroundDarker: "#000001",
      line: "#1F1942",
      text: "#7B7599",
      textLighter: "#7C7799",
      textHighlight: "#fff",
    },
    backgroundPattern: "flare",
    logo: () => <Logo />,
  },
  contentFooter: {
    editRepositoryBase: "https://github.com/Itsoon/blog",
    socials: [
      social.discord("https://discord.gg/aSkS8yw4d9"),
      social.github("https://github.com/Itsoon"),
    ],
  },
  meta: {
    titleTemplate: "%s - Itsoon",
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.png",
      },
    ],
  },
});

export default defineTheme([
  site("main", {
    extends: [template],
    directories: [
      directory("main", {
        sidebar: [],
      }),
    ],
  }),
  site("blog", {
    extends: [template],
    directories: [
      directory("en", {
        sidebar: [
          group("Getting started", [link("Welcome", "/blog/welcome")]),
          separator(),

          group("Linux", [
            link("Reset a forgotten root passwd", "/blog/linux/reset-forgotten-root-passwd"),
            link("List Users on Linux", "/blog/linux/list-users-linux"),
            link.nested("Grub", [
              link(
                "Booting into a Root Shell via GRUB",
                "/blog/linux/grub/Booting-into-a-Root-Shell-via-GRUB",
              ),
            ]),
          ]),
          group("Windows", [
            link("Reset admin passwd", "/blog/windows/reset-admin-passwd-windows")
          ]),
          group("Computer Basics", [
            link("Convert binary to decimal", "/blog/Computer-Basics/binary-to-decimal")
          ])

        ],
      }),
    ],
  }),
]);
