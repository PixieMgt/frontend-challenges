import $ from 'jquery';

const HomeProjects = () => {
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $('.home-projects__line').stop().animate({ width: `${(scrollTop - 1250)}` }, 500);
    });

    return (
        <div className="home-projects">
            <div alt="" className="home-projects__image home-projects__image--first"><div className="home-projects__scrim--first"></div></div>
            <div alt="" className="home-projects__image home-projects__image--second"><div className="home-projects__scrim--second"></div></div>
            <div alt="" className="home-projects__image home-projects__image--third"><div className="home-projects__scrim--third"></div></div>
            <div alt="" className="home-projects__image home-projects__image--fourth"><div className="home-projects__scrim--fourth"></div></div>
            <h1 className="home-projects__title">onze projecten</h1>
            <div className="home-projects__line"></div>
            <button className="home-projects__read-more">bekijk al onze projecten</button>
        </div>
    );
}

export default HomeProjects;