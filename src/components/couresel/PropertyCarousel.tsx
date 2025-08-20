import React, { useState, useEffect } from 'react';
import styles from './PropertyCarousel.module.css';

interface PropertySlide {
  id: number;
  image: string;
  label: string;
  title: string;
}

interface PropertyCarouselProps {
  slides?: PropertySlide[];
  autoRotateInterval?: number;
}

const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ 
  slides: propSlides,
  autoRotateInterval = 4000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default slides if none provided
  const defaultSlides: PropertySlide[] = [
    {
      id: 1,
      image: '/images/property-1.jpg',
      label: 'MOST CLICKED',
      title: 'Urban Prime Plaza Premiere'
    },
    {
      id: 2,
      image: '/images/property-2.jpg',
      label: 'MOST WATCH LISTED',
      title: 'Urban Prime Plaza Premiere'
    },
    {
      id: 3,
      image: '/images/property-3.jpg',
      label: 'HOTTEST LISTING',
      title: 'Urban Prime Plaza Premiere'
    }
  ];

  const slides = propSlides || defaultSlides;

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoRotateInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
          >
            <div className={styles.imageContainer}>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.slideImage}
              />
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <span className={styles.label}>{slide.label}</span>
                  <h3 className={styles.title}>{slide.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;