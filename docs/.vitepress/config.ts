import { DefaultTheme, defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

const NavBar: DefaultTheme.NavItem[] = [
  { text: "Home", link: "/" },
  { text: "Beginner's Guide", link: "/user/", activeMatch: "/user/" },
  { text: "Developer's Guide", link: "/dev/", activeMatch: "/dev/" },
  { text: "Discord", link: "https://discord.com/invite/F8cJ2ePRej" }
];

const UserSidebar: DefaultTheme.SidebarItem[] = [
  {
    items: [
      { text: "Beginner's Guide", link: "/user/", },
      {
        text: "Installing Mods",
        items: [
          { text: "Overview", link: "/user/installation/", },
          { text: "Using a Mod Manager", link: "/user/installation/mod-manager", },
          { text: "Manually", link: "/user/installation/manual", }
        ]
      }
    ]
  },
];

const DevSidebar: DefaultTheme.SidebarItem[] = [
  {
    items: [
      { text: "Developer's Guide", link: "/dev/" },
      {
        text: "Creating Mods",
        items: [
          { text: "Initial Setup", link: "/dev/prerequisites" },
          { text: "Project Setup", link: "/dev/setup" },
        ]
      },
      {
        text: "Publishing Your Mod",
        items: [
          { text: "Prerequisites", link: "/dev/publishing/prerequisites" },
          { text: "Packaging", link: "/dev/publishing/packaging" },
          { text: "Uploading", link: "/dev/publishing/uploading" },
        ]
      },
    ]
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Mycopunk Modding Wiki",
  description: "Modding wiki for Mycopunk",

  base: "/",
  cleanUrls: true,
  lastUpdated: true,

  vite: {
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-highlight-targeted-heading"
      ],
    },
    optimizeDeps: {
      exclude: ["vitepress"]
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      UnoCSS(),
    ],
  },

  markdown: {
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    outline: "deep",
    search: {
      provider: "local"
    },
    nav: NavBar,

    sidebar: {
      "/user/": UserSidebar,
      "/dev/": DevSidebar,
    },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" }
    // ]
  }
});
