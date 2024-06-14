"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ProductsPage.module.css';

const ProductsPage: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  const activate = 0;

  const loadCarousel = () => {
    if (sliderRef.current) {
      const items = sliderRef.current.querySelectorAll(`.${styles.item}`);
      let stt = 0;
      for (let i = activate + 1; i < items.length; i++) {
        stt++;
        (items[i] as HTMLElement).style.transform = `translateX(${120 * stt}px) `;
      }
      stt = 0;
      for (let i = activate - 1; i >= 0; i--) {
        stt++;
        (items[i] as HTMLElement).style.transform = `translateX(${120 * stt}px))`;
      }
    }
  };

  useEffect(() => {
    loadCarousel();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Main Page about products</h1>
      <div className={styles.slider} ref={sliderRef}>
        <div className={styles.item}>
          <h1 className={styles.itemHeader}>Slide 1</h1>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nostrum tenetur rem? Saepe pariatur magni tempora quaerat accusamus itaque, error nisi quam ratione, nostrum cum culpa maiores soluta doloribus optio aperiam quo quae. Corrupti ratione, fuga eos illo deserunt qui. Molestias accusantium cumque unde consequatur.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.itemHeader}>Slide 2</h1>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nostrum tenetur rem? Saepe pariatur magni tempora quaerat accusamus itaque, error nisi quam ratione, nostrum cum culpa maiores soluta doloribus optio aperiam quo quae. Corrupti ratione, fuga eos illo deserunt qui. Molestias accusantium cumque unde consequatur.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.itemHeader}>Slide 3</h1>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nostrum tenetur rem? Saepe pariatur magni tempora quaerat accusamus itaque, error nisi quam ratione, nostrum cum culpa maiores soluta doloribus optio aperiam quo quae. Corrupti ratione, fuga eos illo deserunt qui. Molestias accusantium cumque unde consequatur.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.itemHeader}>Slide 4</h1>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nostrum tenetur rem? Saepe pariatur magni tempora quaerat accusamus itaque, error nisi quam ratione, nostrum cum culpa maiores soluta doloribus optio aperiam quo quae. Corrupti ratione, fuga eos illo deserunt qui. Molestias accusantium cumque unde consequatur.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.itemHeader}>Slide 5</h1>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nostrum tenetur rem? Saepe pariatur magni tempora quaerat accusamus itaque, error nisi quam ratione, nostrum cum culpa maiores soluta doloribus optio aperiam quo quae. Corrupti ratione, fuga eos illo deserunt qui. Molestias accusantium cumque unde consequatur.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.itemHeader}>Slide 6</h1>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nostrum tenetur rem? Saepe pariatur magni tempora quaerat accusamus itaque, error nisi quam ratione, nostrum cum culpa maiores soluta doloribus optio aperiam quo quae. Corrupti ratione, fuga eos illo deserunt qui. Molestias accusantium cumque unde consequatur.</p>
        </div>
        {/* Add more items as needed */}
      </div>
      <button id="prev" ref={prevRef} className={styles.button}>Previous</button>
      <button id="next" ref={nextRef} className={styles.button}>Next</button>
    </div>
  );
};

export default ProductsPage;
