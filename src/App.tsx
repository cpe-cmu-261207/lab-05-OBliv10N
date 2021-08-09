import React from 'react';
import { useState } from 'react'
import Footer from './component/footer';
import Head from './component/head';
import Todo from './component/todo';

function App() {

  return (
    <div>
      <Head></Head>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  );
}

export default App;
