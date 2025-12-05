import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Mainlayouts = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main>
          <section className="mt-10">
            {/* <Slider /> */}
          </section>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
        </div>
    );
};

export default Mainlayouts;