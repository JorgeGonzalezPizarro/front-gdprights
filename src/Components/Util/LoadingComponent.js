import React from 'react';
export const Loading = () => {
    return(
            <div className="container">

                <div className="row spinner">
        <div className="col-12" >
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"/>
            <p>Loading . . .</p>
        </div>
                </div>
            </div>
    );
};