import React from 'react';
import Page from '../components/Page';

function Home() {
    return (
        <Page title="Home" type="home">
            <p className="text-xl">Welcome to my first complete and beautifully designed React project!</p>
            <br />
            <p>You are currently on the "Home" page. To change the page just click on the corresponding page title in the menu bar.</p>
            < br />
            <img src={process.env.PUBLIC_URL + "/cat_image.jpg"} width="200" className="m-4 md-6"/>
            <p>To return here, you just have to click on "Home" or the logo (in the left of the menu bar).</p>
        </Page>
    )
}

export default Home;