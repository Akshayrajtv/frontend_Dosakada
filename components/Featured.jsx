import styles from "../styles/Featured.module.css";
import Image from "next/legacy/image";
import { useState } from "react";
const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/featured.jpeg",
        "/img/feature2.jpeg",
        "/img/featured4.jpeg",
        "/img/feature3.jpeg",
        "/img/featured5.jpeg",
        "/img/featured1.jpeg",
    ];
    const handleArrow = (direction) => {
        if (direction == "l") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction == "r") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };
    return (
        <div className={styles.container}>
            <div
                className={styles.arrowContainer}
                style={{ left: 0 }}
                onClick={() => handleArrow("l")}
            >
                <Image
                    src="/img/arrowl.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <div
                className={styles.wrapper}
                style={{ transform: `translatex(${-100 * index}vw)` }}
            >
                {images.map((img, i) => (
                    <div className={styles.imageContainer} key={i}>
                        <Image
                            src={img}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>
            <div
                className={styles.arrowContainer}
                style={{ right: 0 }}
                onClick={() => handleArrow("r")}
            >
                <Image
                    className={styles.img_color}
                    src="/img/arrowr.png"
                    alt=""
                    layout="fill"
                />
            </div>
        </div>
    );
};

export default Featured;
