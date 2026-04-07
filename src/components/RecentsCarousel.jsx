import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

// Eagerly bundle every image dropped into `assets/images/recents`. New files
// added to that folder show up automatically — no JSON to maintain.
const recentModules = import.meta.glob(
    '../assets/images/recents/*.{png,jpg,jpeg,gif,svg,webp}',
    { eager: true, import: 'default' }
);

const recents = Object.entries(recentModules)
    .sort(([a], [b]) => {
        const aName = a.split('/').pop();
        const bName = b.split('/').pop();
        return aName.localeCompare(bName, undefined, { numeric: true });
    })
    .map(([path, url]) => ({ path, url }));

const RecentsCarousel = () => {
    if (recents.length === 0) return null;

    return (
        <section className="recents-carousel reveal">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    Recent Work
                </h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            </div>
            <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={false}
                freeMode={true}
                loop={recents.length > 4}
                speed={800}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 2.2, spaceBetween: 20 },
                    768: { slidesPerView: 3.2, spaceBetween: 24 },
                    1024: { slidesPerView: 4.2, spaceBetween: 28 },
                    1400: { slidesPerView: 5.2, spaceBetween: 32 },
                }}
            >
                {recents.map(({ path, url }) => (
                    <SwiperSlide key={path}>
                        <div className="recent-card">
                            <img
                                src={url}
                                alt="Recent Nexmax work"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default RecentsCarousel;
