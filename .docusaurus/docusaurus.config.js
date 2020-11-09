export default {
  "title": "C3PM",
  "tagline": "C++ development made simple",
  "url": "https://c3pm.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "gabrielcolson",
  "projectName": "c3pm",
  "themeConfig": {
    "navbar": {
      "title": "C3PM",
      "logo": {
        "alt": "C3PM logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "docs/getting_started/install",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/c3pm-labs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting started",
              "to": "docs/getting_started"
            },
            {
              "label": "About",
              "to": "docs/about/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/c3pm"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/c3pmcpp"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/c3pm-labs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 C3PM Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/oursin/Documents/eip/docs/sidebars.js",
          "editUrl": "https://github.com/c3pm-labs/docs/tree/master"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/c3pm-labs/docs/tree/master/blog/"
        },
        "theme": {
          "customCss": "/home/oursin/Documents/eip/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};