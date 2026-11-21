import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="p-3 mt-3" id='supportWrapper'>
                <h2>Support Portal</h2>
                <button type="button" className='btn btn-primary'>My tickets</button>
            </div>
            <div className="row p-3">
                <div class="input-group" id='supportInput'> 
                    <input type="text" class="form-control" placeholder="Eg: How do I open my account, 
                        How do i activate F&O..."/>
                </div>
            </div>
        </section>
    );
}

export default Hero;