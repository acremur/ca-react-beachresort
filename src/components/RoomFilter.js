import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

// Get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context

    // Get unique types
    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => (
        <option value={item} key={index}>{item}</option>
    ))

    // Get people groups
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => (
        <option value={item} key={index}>{item}</option>
    ))

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className='form-control'
                        onChange={handleChange}
                    >{types}</select>
                </div>
                {/* End select type */}
                {/* guests type */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className='form-control'
                        onChange={handleChange}
                    >{people}</select>
                </div>
                {/* End guests type */}
                {/* Room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input 
                        type="range" 
                        name="price" 
                        min={minPrice} 
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/* End room price */}
                { /* Room size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input 
                            type="number" 
                            name="minSize" 
                            id="size" 
                            value={minSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                        <input 
                            type="number" 
                            name="maxSize" 
                            id="size" 
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                    </div>
                </div>
                { /* End room size */}
                {/* Room Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* End room Extras */}
            </form>
        </section>
    )
}

export default RoomFilter
