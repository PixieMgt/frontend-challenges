import $ from 'jquery';

const Showcase = () => {
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $('.showcase-text__line').stop().animate({ width: `${scrollTop * 2}` }, 500);
    });

    return (
        <div className="showcase">
            <div className="showcase-container showcase-container__first">
                <div className="showcase-scrim"></div>
                <div className="showcase-text">
                    <h1 className="showcase-text__title">stabiliteit ontmoet creativiteit</h1>
                    <div className="showcase-text__line"></div>
                    <button className="showcase-text__read-more">Lees meer</button>
                </div>
                <img src="../images/canal-wharf.jpg" alt="Canal Wharf" className="showcase-image" />
            </div>
            <div className="showcase-container showcase-container__second hidden">
                <div className="showcase-scrim"></div>
                <div className="showcase-text">
                    <h1 className="showcase-text__title">onze focus op stabiliteit gaat verder</h1>
                    <div className="showcase-text__line"></div>
                    <button className="showcase-text__read-more">Lees meer</button>
                </div>
                <img src="../images/quatuor-building.jpg" alt="Quatuor Building" className="showcase-image" />
            </div>
            <div className="showcase-container showcase-container__third hidden">
                <div className="showcase-scrim"></div>
                <div className="showcase-text">
                    <h1 className="showcase-text__title">het kennisbureau voor stabiliteit</h1>
                    <div className="showcase-text__line"></div>
                    <button className="showcase-text__read-more">Lees meer</button>
                </div>
                <img src="../images/ekla.jpg" alt="Ekla Brussels" className="showcase-image" />
            </div>
        </div>
    );
}

export default Showcase;