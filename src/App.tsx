import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import {Posts} from './components/posts/posts';
import {Post} from './components/post/post';

const App = () => (
  <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<Post />}/>
      </Routes>
    <Footer />
  </>
);

export default App;