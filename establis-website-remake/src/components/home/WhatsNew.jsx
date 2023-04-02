import $ from 'jquery';

const WhatsNew = () => {
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $('.whats-new__line').stop().animate({ width: `${(scrollTop - 2900)}` }, 500);
    });

    return (
        <div className="whats-new">
            <h1 className="whats-new__title">wat is nieuw?</h1>
            <div className="whats-new__line"></div>
            <img className="whats-new__image" />
            <p className="whats-new__content-date">21 maart 2023</p>
            <p className="whats-new__content-title">Pier Kornel mixt diverse woonvormen op oude Tupperware-site in Aalst</p>
            <p className="whats-new__content">Op de voormalige site van Tupperware langs de Pierre Corneliskaai in Aalst wordt momenteel de laatste fase opgeleverd van ‘Pier Kornel’. Dit project van Matexi en Revive omvat 450 wooneenheden in diverse vormen.    De plasticfabriek – en nog vroeger een weverij – werd vervangen door een mix v...</p>
            <button className="whats-new__read-more">lees meer</button>
        </div>
    );
}

export default WhatsNew;