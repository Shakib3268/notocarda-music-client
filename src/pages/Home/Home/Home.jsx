import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../../MostClass/PopularClass';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Components/Sectiontitle/SectionTitle';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import MarqueeText from '../../../Shared/MarqueeText/MarqueeText';
import Welcome from '../welcome/Welcome';
import PrincipalsTalk from './PrincipalsTalk';
import Services from './Services';
import Gallery from './Gallery';
import Why from './Why';
import TotalCount from './TotalCount';
import Events from './Events';
import Subscribe from './Subscribe';

const Home = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: popularclasses = [] } = useQuery(['popularclasses'], async () => {
        const res = await axiosSecure.get('/popularclasses')
        return res.data;
    })
    return (
        <div>
            <MarqueeText></MarqueeText>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
            <Welcome></Welcome>
            <PrincipalsTalk></PrincipalsTalk>
            <div className='lg:px-8 px-1 mt-8'>
                <SectionTitle subHeading='NotoCard Music Academy' heading='Popular Classes'></SectionTitle>
                <div className='grid lg:grid-cols-3 gap-10 mt-24 mb-24'>
                    {
                        popularclasses?.map(singleclass => <PopularClass
                            key={singleclass?._id}
                            singleclass={singleclass}
                        ></PopularClass>)
                    }
                </div>
            </div>
            <PopularInstructor></PopularInstructor>
            <Gallery></Gallery>
            <Services></Services>
            </div>
            <Why></Why>
            <div className='max-w-7xl mx-auto'>
            <TotalCount></TotalCount>
            <Events></Events>
            <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;