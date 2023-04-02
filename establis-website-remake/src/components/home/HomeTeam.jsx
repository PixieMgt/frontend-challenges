import $ from 'jquery';

const HomeTeam = () => {
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $('.home-team__line').stop().animate({ width: `${(scrollTop - 2500)}` }, 500);
    });

    return (
        <div className="home-team">
            <h1 className="home-team__number">28</h1>
            <h1 className="home-team__title">redenen om op ons te bouwen</h1>
            <div className="home-team__line"></div>
            <button className="home-team__read-more">ontdek ons team</button>
        </div>
    );
}

export default HomeTeam;