import $ from 'jquery';

const HomeAbout = () => {
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $('.home-about__line').stop().animate({ width: `${(scrollTop - 600)}` }, 500);
    });

    return (
        <div className="home-about">
            <h1 className="home-about__title">specialisten in stabiliteit</h1>
            <div className="home-about__line"></div>
            <p className="home-about__content">Bij Establis hebben we 1 duidelijke focus: stabiliteit. Daarom is ons bureau al vele jaren een stevige en gewaardeerde schakel in tal van bouwprojecten. Want met onze focus hebben we een duidelijk doel voor ogen. Voor onze klanten de beste en meest creatieve oplossingen bedenken in stabiliteit voor al wat ze ondernemen. Daarom hebben we ook de beste specialisten in huis. Projectleiders, gepassioneerd door stabiliteit, die tegelijk meedenken over alle aspecten van uw project.</p>
            <button className="home-about__read-more">lees meer</button>
        </div>
    );
}

export default HomeAbout;