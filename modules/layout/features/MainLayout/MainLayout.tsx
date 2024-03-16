import React, { PropsWithChildren } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Main } from './Main';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <div>
    <Header />
    <Sidebar />
    <Footer />
    <Main>{children}</Main>
  </div>
);
