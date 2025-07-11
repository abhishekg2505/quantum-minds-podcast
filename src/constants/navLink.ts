import { ROUTES } from "./routes";

export const navLinks = [
  {
    itemName: "Company",
    subMenu: [
      {
        subMenuName: "About",
        subMenuLink: ROUTES?.ABOUT,
      },
      {
        subMenuName: "Ecosystem",
        subMenuLink: ROUTES?.ECOSYSTEM,
      },
    ],
  },
  {
    itemName: "Build with us",
    link: ROUTES?.BUILD_WITH_US,
  },
  // {
  //   itemName: "Technology",
  //   subMenu: [
  //     // {
  //     //   subMenuName: "Understand our Tech",
  //     //   subMenuLink: ROUTES?.TECHNICAL,
  //     // },
  //     {
  //       subMenuName: "Ecosystem",
  //       subMenuLink: ROUTES?.ECOSYSTEM,
  //     },
  //   ],
  // },
  {
    itemName: "Products",
    subMenu: [
      {
        subMenuName: "QSafe Wallet",
        subMenuLink: ROUTES?.QSAFE,
      },
      {
        subMenuName: "QRN Faucet",
        subMenuLink: ROUTES?.QRN_FAUCET,
      },
      {
        subMenuName: "QRemix AI",
        subMenuLink: "https://www.qremix.org/",
      },
      {
        subMenuName: "QRN Explorer",
        subMenuLink: ROUTES?.QRN_SCAN,
      },
    ],
  },
  {
    itemName: "Initiatives",
    subMenu: [
      {
        subMenuName: "Global Roadshow 2025",
        subMenuLink: ROUTES?.GLOBAL_ROADSHOW,
      },
      {
        subMenuName: "Quantum Minds Podcast",
        subMenuLink: ROUTES?.QUANTUM_MINDS_PODCAST,
      },
      {
        subMenuName: "The Uncrackable Conversation",
        subMenuLink: ROUTES?.UNCRACKABLE_CONVERSATION,
      },
      {
        subMenuName: "Quantum Security Awareness Day 2025",
        subMenuLink: ROUTES?.QUANTUM_SECURITY_AWARENESS_DAY,
      },
      {
        subMenuName: "DeQUIP",
        subMenuLink: ROUTES?.DEQUIP,
      },

      {
        subMenuName: "Next Gen Innovators",
        subMenuLink: ROUTES?.NEXT_GEN_INNOVATORS,
      },
      {
        subMenuName: "Layers & Lattes",
        subMenuLink: ROUTES?.LAYERS_AND_LATTES,
      },
    ],
  },
  // {
  //   itemName: "Resources",
  //   link: ROUTES?.RESOURCES,
  //   subMenu: [
  //     {
  //       subMenuName: "Quantum Minds Podcast",
  //       subMenuLink: `${ROUTES?.RESOURCES}#podcast`,
  //     },
  //     {
  //       subMenuName: "Blogs",
  //       subMenuLink: `${ROUTES?.RESOURCES}#blog`,
  //     },
  //     {
  //       subMenuName: "Press",
  //       subMenuLink: `${ROUTES?.RESOURCES}#press`,
  //     },
  //     {
  //       subMenuName: "Media Kit",
  //       subMenuLink: `${ROUTES?.RESOURCES}#media-kit`,
  //     },
  //   ],
  // },
  // {
  //   itemName: "Resources",
  //   link: ROUTES?.RESOURCES,
  // },
];
