import React from 'react';
import aboutImg from '../assets/about.png'
import workingImg from '../assets/working.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                <div className='space-y-3'> 
                    <h1 className='font-bold text-6xl shadow-xl rounded-2xl border-b-2'>FEBRIC FASSION</h1>
                    <p className='font-semibold'>Everythink you need to know about Febric Fasion</p>
                </div>
                <div><img className='w-140' src={aboutImg} alt="" /></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center border-t-2 gap-5 my-12'>
                <div><img className='w-130 border-t-2' src={workingImg} alt="" /></div>
                <div className='space-y-2.5'>
                    <h1 className='font-bold text-2xl'>About Febric Fasion</h1>
                    <p>Fabric Fashion is the art and business of transforming raw textiles into stylish, functional, and expressive garments. It reflects the harmony between material, design, and craftsmanship, where every thread tells a story of culture, identity, and creativity. Through careful selection of fabrics—whether natural or synthetic—Fabric Fashion shapes how people present themselves to the world, combining comfort, durability, and aesthetic beauty. It is not just about clothing; it is about confidence, lifestyle, and the evolving language of style that connects tradition with modern trends.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;