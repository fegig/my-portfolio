import Home from './routes'
import AboutPage from './routes/about'
import ContactPage from './routes/contact'
import Founder from './routes/founder'
import InsightsPage from './routes/insights'
import ProjectsPage from './routes/projects'
import ServicesPage from './routes/services'
import DeleteAccount from './routes/quizzer/delete-account'
import QuizzerHome from './routes/quizzer'
import PrivacyPolicy from './routes/quizzer/privacy-policy'

const routes = [
  {
    path: '/',
    element: <Home />,
    handle: {
      seo: {
        title: 'FegigTech | Fegig Technologies Limited',
        description:
          'Fegig Technologies Limited builds scalable web, mobile, AI, cloud, and enterprise software solutions from Abraka, Nigeria.',
        path: '/',
      },
    },
  },
  {
    path: '/services',
    element: <ServicesPage />,
    handle: {
      seo: {
        title: 'Services | FegigTech',
        description:
          'Explore FegigTech services across product engineering, UI/UX design, mobile apps, AI systems, cloud infrastructure, and enterprise software.',
        path: '/services',
      },
    },
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
    handle: {
      seo: {
        title: 'Projects | FegigTech',
        description:
          'See selected FegigTech work across mobile tools, fintech platforms, learning products, company websites, dashboards, and internal systems.',
        path: '/projects',
      },
    },
  },
  {
    path: '/about',
    element: <AboutPage />,
    handle: {
      seo: {
        title: 'About | FegigTech',
        description:
          'Learn about Fegig Technologies Limited, a founder-led software studio in Abraka, Nigeria building dependable digital products.',
        path: '/about',
      },
    },
  },
  {
    path: '/insights',
    element: <InsightsPage />,
    handle: {
      seo: {
        title: 'Insights | FegigTech',
        description:
          'Read practical notes from FegigTech on product planning, engineering decisions, AI systems, and maintainable digital products.',
        path: '/insights',
      },
    },
  },
  {
    path: '/contact',
    element: <ContactPage />,
    handle: {
      seo: {
        title: 'Contact | FegigTech',
        description:
          'Contact FegigTech for web, mobile, AI, cloud, UI/UX, and enterprise software projects. Share what you want to build or improve.',
        path: '/contact',
      },
    },
  },
  {
    path: '/founder',
    element: <Founder />,
    handle: {
      seo: {
        title: 'Oghenefegor Idoro | Founder of FegigTech',
        description:
          'Meet Oghenefegor Idoro, founder of Fegig Technologies Limited and product engineer behind FegigTech.',
        path: '/founder',
        image: '/assets/sample.png',
        imageAlt: 'Oghenefegor Idoro, founder of FegigTech',
        imageWidth: '1893',
        imageHeight: '860',
      },
    },
  },
  {
    path: '/quizzer',
    children: [
      {
        index: true,
        element: <QuizzerHome />,
        handle: {
          seo: {
            title: 'Quizzer Study/Play/Earn | FegigTech',
            description:
              'Quizzer Study/Play/Earn turns learning into a competitive study game with quizzes, leaderboards, streaks, and rewards.',
            path: '/quizzer',
            image: '/assets/shots/quizzer-shot.png',
            imageAlt: 'Quizzer Study/Play/Earn app screenshot',
            imageWidth: '1196',
            imageHeight: '2633',
          },
        },
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
        handle: {
          seo: {
            title: 'Quizzer Privacy Policy | FegigTech',
            description:
              'Read the privacy policy for Quizzer Study/Play/Earn, including how the app collects, uses, shares, and protects user information.',
            path: '/quizzer/privacy-policy',
            image: '/assets/shots/quizzer-shot.png',
            imageAlt: 'Quizzer Study/Play/Earn app screenshot',
            imageWidth: '1196',
            imageHeight: '2633',
          },
        },
      },
      {
        path: 'delete-account',
        element: <DeleteAccount />,
        handle: {
          seo: {
            title: 'Delete Quizzer Account | FegigTech',
            description:
              'Request deletion of your Quizzer Study/Play/Earn account and associated personal data through the official FegigTech support page.',
            path: '/quizzer/delete-account',
            image: '/assets/shots/quizzer-shot.png',
            imageAlt: 'Quizzer Study/Play/Earn app screenshot',
            imageWidth: '1196',
            imageHeight: '2633',
          },
        },
      },
    ],
  },
]

export default routes
