import React, { PropsWithChildren } from 'react';

import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Main } from './Main';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <Sidebar />
    <Main>{children}</Main>
    <Footer />
  </>
);
