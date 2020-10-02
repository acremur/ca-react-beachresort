import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui ea, odit nemo ad pariatur.'
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui ea, odit nemo ad pariatur.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'gree shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui ea, odit nemo ad pariatur.'
            },
            {
                icon: <FaBeer />,
                title: 'strongest beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui ea, odit nemo ad pariatur.'
            }
        ]
    }
    
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => (
                        <article key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}

export default Services
