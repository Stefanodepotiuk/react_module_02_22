import React from 'react';

import './GenerOne.css'
import {Link} from "react-router-dom";

const GenreOne = ({genre}) => {
    const {name} = genre;
    return (
        <div>

                <button className={'button'}>
                    {name}
                </button>



        </div>
    );
};

export {GenreOne};