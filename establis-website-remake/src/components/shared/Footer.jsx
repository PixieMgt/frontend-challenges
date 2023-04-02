const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-subscribe">
                <h1 className="footer-subscribe__title">inschrijven</h1>
                <input className="footer-subscribe__email" placeholder="Vul uw e-mailadres in en ontvang onze newsletter" />
                <button className="footer-subscribe__submit">verzend</button>
            </div>
            <div className="footer-content">
                <div className="footer-content-column__establis">
                    <h2 className="footer-content-column__establis__title">establis</h2>
                    <p className="footer-content-column__establis__paragraph">establis garandeert u creatieve berekeningen en optimale oplossingen voor uw bouwkundige structuren</p>
                    <p className="footer-content-column__establis__paragraph">Ons team in Roeselare, Antwerpen en Gent bestaat uit hooggekwalificeerde medewerkers met diverse specialiteiten, ondermeer op het vlak van beton, staal, prefab, funderingstechnieken en seïsme, dit alles in een BIM-omgeving uitgewerkt. Wij staan klaar om uw unieke bouwproject van a tot z te begeleiden</p>
                    <p className="footer-content-column__establis__paragraph">Een beroep doen op establis betekent voor u het binnenhalen van stabliteit</p>
                    <p className="footer-content-column__establis__privacy">privacyverklaring</p>
                    <div className="footer-content-column__establis__social-media"></div>
                </div>
                <div className="footer-content-column__sitemap">
                    <h2 className="footer-content-column__sitemap__title">sitemap</h2>
                    <button className="footer-content-column__sitemap__button">home</button>
                    <button className="footer-content-column__sitemap__button">over ons</button>
                    <button className="footer-content-column__sitemap__button">ROOTS</button>
                    <button className="footer-content-column__sitemap__button">team</button>
                    <button className="footer-content-column__sitemap__button">projecten</button>
                    <button className="footer-content-column__sitemap__button">werken bij ons</button>
                    <button className="footer-content-column__sitemap__button">nieuws</button>
                    <button className="footer-content-column__sitemap__button">duurzaamheid</button>
                    <button className="footer-content-column__sitemap__button">contact</button>
                </div>
                <h2 className="footer-content-column__contact__title">contact</h2>
                <div className="footer-content-column__contact-container__roeselare">
                    <p className="footer-content-column__contact__location">establis Roeselare nv</p>
                    <p className="footer-content-column__contact__line">Beversesteenweg 612</p>
                    <p className="footer-content-column__contact__line">8800 - Roeselare</p>
                    <p className="footer-content-column__contact__line">+32 (0)51 43 12 00</p>
                    <p className="footer-content-column__contact__line">roeselare@establis.eu</p>
                    <p className="footer-content-column__contact__line">BTW BE 0430 475 409</p>
                    <p className="footer-content-column__contact__line">RPR Kortrijk</p>
                </div>
                <div className="footer-content-column__contact-container__gent">
                    <p className="footer-content-column__contact__location">establis Gent bv</p>
                    <p className="footer-content-column__contact__line">Derbystraat 107</p>
                    <p className="footer-content-column__contact__line">9051 - Sint-Denijs-Westrem</p>
                    <p className="footer-content-column__contact__line">+32 (0)9 398 65 30</p>
                    <p className="footer-content-column__contact__line">gent@establis.eu</p>
                    <p className="footer-content-column__contact__line">BTW BE 0739 896 402</p>
                    <p className="footer-content-column__contact__line">RPR Gent</p>
                </div>
                <div className="footer-content-column__contact-container__antwerpen">
                    <p className="footer-content-column__contact__location">establis Antwerpen bv</p>
                    <p className="footer-content-column__contact__line">Jan van Gentstraat 7/201</p>
                    <p className="footer-content-column__contact__line">2000 - Antwerpen</p>
                    <p className="footer-content-column__contact__line">+32 (0)3 640 38 10</p>
                    <p className="footer-content-column__contact__line">antwerpen@establis.eu</p>
                    <p className="footer-content-column__contact__line">BTW BE 0895 940 203</p>
                    <p className="footer-content-column__contact__line">RPR Antwerpen</p>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright__line"></div>
                <p className="footer-copyright__text">© Establis - 2023</p>
            </div>
        </footer>
    );
}

export default Footer;