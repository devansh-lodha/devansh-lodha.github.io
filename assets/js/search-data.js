// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "will be putting my publications here",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "cool stuff upcoming!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "my repositories!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-made-it-to-semester-1-s-dean-s-list-letter-of-appreciation",
          title: 'Made it to Semester-1’s Dean’s List! (Letter of Appreciation)',
          description: "",
          section: "News",},{id: "news-made-it-to-semester-2-s-dean-s-list-letter-of-appreciation",
          title: 'Made it to Semester-2’s Dean’s List! (Letter of Appreciation)',
          description: "",
          section: "News",},{id: "news-joining-tedxiitgandhinagar-as-licensee-organizer-and-design-core",
          title: 'Joining TEDxIITGandhinagar as Licensee, Organizer and Design Core!',
          description: "",
          section: "News",},{id: "news-recognized-by-the-head-of-department-hod-cse-iit-gandhinagar-for-being-among-the-top-20-of-students-in-the-computer-science-and-engineering-branch-letter-of-acknowledgement",
          title: 'Recognized by the Head of Department (HOD), CSE, IIT Gandhinagar, for being among...',
          description: "",
          section: "News",},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/323045915332050944", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%65%76%61%6E%73%68%6C%6F%64%68%61%31%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/100074659095188", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/devansh-lodha", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/devanshlodha_12", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/devanshlodha", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/+71 7016784377", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/devanshlodha_12", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
