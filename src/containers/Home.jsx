import React, {Fragment} from 'react';
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Categories from '../components/Categories.jsx';
import Carousel from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem.jsx';
import Footer from '../components/Footer.jsx';
import useInitialState from '../hooks/useInitialState.js';

import '../assets/styles/App.scss'

const Home = () => {
    const API = 'http://localhost:3000/initialState'
    const videos = useInitialState(API);    

    const {mylist, trends, originals} = videos;

    const renderApp = () => {
        if(videos.length !== 0 ) {
            return(
                <Fragment>
                    <Search/>
                    {
                        mylist.length > 0 &&
                            <Categories title="Mis favoritos">
                                <Carousel>
                                    {mylist.map(item => 
                                        <CarouselItem key={item.id} {...item}/>
                                    )}
                                </Carousel>
                            </Categories>
                    }

                     {
                        trends.length > 0 &&
                            <Categories title="Tendencias">
                                <Carousel>
                                    {trends.map(item => 
                                        <CarouselItem key={item.id} {...item}/>
                                    )}
                                </Carousel>
                            </Categories>
                    }
                    {
                        originals.length > 0 &&
                            <Categories title="Originales">
                                <Carousel>
                                    {originals.map(item => 
                                        <CarouselItem key={item.id} {...item}/>
                                    )}
                                </Carousel>
                            </Categories>
                    }
                </Fragment>
            )
        }else return ''
    }

    return(
        <div>
            {renderApp()}
        </div>
    );

}

export default Home;