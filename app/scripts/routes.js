import Layout from 'components/Layout';
import HomePage from 'pages/Home';

const routes = {
  component: Layout,
  childRoutes: [
    {
      path: '/',
      component: HomePage,
    },
  ],
};

export default routes;
