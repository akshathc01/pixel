import React, { useEffect, useState } from 'react';
import ShowCommunityImages from '../ShowCommunityImages/ShowCommunityImages';

const GetCommunityImages = () => {
    const [images, setEvents] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3002/communityImages`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <section data-testid="test-getCommunityImages" className="services-container">
            <div className="text-center">
                <div className="form-group row d-flex justify-content-center pt-5">
                    <input type="" className="form-control border border-danger col-5 " placeholder="Type for finding images" onChange={e => { setSearch(e.target.value) }} />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-100 row pb-5  justify-content-center">
                    {
                        images.filter((val) => {
                            if (search == "") {
                                return val
                            } else if (val.title.toLowerCase().includes(search.toLocaleLowerCase()))
                                return val
                        }).map(image => <ShowCommunityImages image={image}></ShowCommunityImages>)
                    }
                </div>
            </div>

        </section>
    );
};

export default GetCommunityImages;