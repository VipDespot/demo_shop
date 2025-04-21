import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router';
import '@mantine/dates/styles.css';
import Header from './pages/Header/Header';
import {About} from './pages/About/About';
import {Contact} from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { Passport } from './components/Product/Passport';
import { Basket } from './pages/Basket/Basket';
import  {Profile}  from './pages/Profile/Profile';

export const App = () => {
  return (
    <MantineProvider>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products/:id" element={<Passport />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
    </MantineProvider>
  );
};
