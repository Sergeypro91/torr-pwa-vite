import React, { PropsWithChildren } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Main } from './Main';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    <Sidebar />
    <Main>{children}</Main>
    <Footer />
  </>
);
