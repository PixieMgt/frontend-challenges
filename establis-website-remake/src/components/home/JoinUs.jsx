import $ from 'jquery';

const JoinUs = () => {
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $('.join-us__line').stop().animate({ width: `${(scrollTop - 3850)}` }, 500);
    });

    return (
        <div className="join-us">
            <div className="join-us__image"></div>
            <div className="join-us__content-container">
                <h1 className="join-us__title">jouw plaats bij establis?</h1>
                <div className="join-us__line"></div>
                <p className="join-us__content">Werken in een open, stimulerende omgeving, met grote aandacht voor kwaliteit, teambuilding en work-life balance? Graag alle nodige tools en opleidingen om succesvol te zijn in je job? Realistische doorgroeimogelijkheden in een groeiend bedrijf met een aantrekkelijk salarispakket? Bekijk dan snel onze vacatures.</p>
                <button className="join-us__read-more">lees meer</button>
            </div>
        </div>
    );
}

export default JoinUs;