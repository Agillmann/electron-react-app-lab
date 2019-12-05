import React from 'react';

import Navbar from './Navbar';

const Layout = ({ children }) => (
  <section>
    <Navbar />
    {children}
  </section>
);

export default Layout;
