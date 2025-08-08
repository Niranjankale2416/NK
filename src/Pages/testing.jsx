import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestAOS = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    const checkWillChange = () => {
      const aosElements = document.querySelectorAll('[data-aos]');
      console.log(`Ditemukan ${aosElements.length} elemen dengan data-aos`);

      aosElements.forEach((element, index) => {
        element.style.border = '2px dashed red';

        const computedStyle = window.getComputedStyle(element);
        const willChange = computedStyle.getPropertyValue('will-change');

        console.log(`Element ${index + 1}:`, {
          'data-aos': element.getAttribute('data-aos'),
          'will-change': willChange,
          'element': element.tagName,
          'classes': element.className,
        });
      });
    };

    // Delay checking after AOS has initialized
    setTimeout(checkWillChange, 100);
  }, []);

  return (
    <>
      {/* Inline style to enforce will-change for all AOS elements */}
      <style>
        {`
          [data-aos] {
            will-change: transform, opacity !important;
          }
        `}
      </style>

      {/* Demo content to test AOS and will-change */}
      <div className="min-h-screen p-10 space-y-12">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-center">
          AOS Animation Test
        </h1>

        <div data-aos="fade-right" className="bg-blue-100 p-6 rounded-md shadow-md">
          This box should fade in from the right.
        </div>

        <div data-aos="zoom-in" className="bg-green-100 p-6 rounded-md shadow-md">
          This box should zoom in.
        </div>

        <div data-aos="flip-up" className="bg-yellow-100 p-6 rounded-md shadow-md">
          This box should flip up.
        </div>
      </div>
    </>
  );
};

export default TestAOS;
