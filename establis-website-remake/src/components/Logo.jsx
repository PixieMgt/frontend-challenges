import $ from 'jquery';

const Logo = () => {
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('.logo').stop().animate({ height: "50px" }, 500);
        }
        else {
            $('.logo').stop().animate({ height: "100px" }, 500);
        }
    });

    return (
        <div className="logo">
        </div>
    );
}

export default Logo;