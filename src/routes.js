
import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import Forms from './components/Forms';
import Services from './components/Services';
import Locations from './components/Locations';
import Waits from './components/Waits';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/forms', async () => <Forms />);

  on('/services', async () => <Services />);

  on('/locations', async () => <Locations />);

  on('/waits', async () => <Waits />);

  on('/contact', async () => <ContactPage />);

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('*', async (state) => {
    const query = `/graphql?query={content(path:"${state.path}"){path,title,content,component}}`;
    const response = await fetch(query);
    const { data } = await response.json();
    return data && data.content && <ContentPage {...data.content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
