import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarLight_Core",
  description: "欢迎来到 StarLight_Core 的使用文档与使用帮助",
  titleTemplate: '文档与帮助',
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/markdown-examples' },
      { text: '反馈', link: 'https://github.com/Ink-Marks-Studio/StarLight.Core/issues' },
      { text: '墨痕工作室', link: 'https://imstudio.top' },
      { text: 'Nuget', link: 'https://www.nuget.org/packages/StarLight_Core' }
    ],

    footer: {
      message: "所有内容均以 CC BY-NC-SA 4.0 许可协议进行共享",
      copyright: "Copyright © Ink Marks Studio",
    },

    sidebar: [
      {
        text: '关于',
        items: [
          { text: '介绍', link: '/About/Introduction' },
          { text: '快速开始', link: '/About/QuickStart' }
        ],
      },
      {
        text: '启动器',
        items: [
          { text: '启动器', link: '/Launcher/Launcher' }
        ],
      },
      {
        text: '验证器',
        items: [
          { text: '微软验证', link: '/Authentication/' },
          { text: '外置验证', link: '/Authentication/' },
          { text: '离线验证', link: '/Authentication/' },
          { text: '统一通行证', link: '/Authentication/UnifiedPassAuthenticator' }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ink-Marks-Studio/StarLight.Core' }
    ]
  }
})
