import React from "react";
import styles from "../src/styles//Testimonal.module.css"
import { Carousel } from 'antd'
const Testimonal = () => {
    

    const list = [
    {
        line: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        image: "../dazko/test1.webp",
        name: "ROGER SCOTT",
        header: "MARKETING MANAGER"
    },
    {
        line: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        image: "../dazko/test2.webp",
        name: "ROGER SCOTT",
        header: "MARKETING MANAGER"
    },
    {
        line: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        image: "../dazko/test3.webp",
        name: "ROGER SCOTT",
        header: "MARKETING MANAGER"
    }
]
    const itmes = [
        {
            line: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
            image: "../dazko/test1.webp",
            name: "ROGER SCOTT",
            header: "MARKETING MANAGER"
        },
        {
            line: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
            image: "../dazko/test2.webp",
            name: "ROGER SCOTT",
            header: "MARKETING MANAGER"
        },
        {
            line: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
            image: "../dazko/test3.webp",
            name: "ROGER SCOTT",
            header: "MARKETING MANAGER"
        }
    
]
const mobItmes = [
    {
        line: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
        image: "../dazko/test1.webp",
        name: "ROGER SCOTT",
        header: "MARKETING MANAGER"
    }
]

return(
    <section className={styles.testimonalSection}>
        <div className={styles.header}>
            <h1>TESTIMONIAL</h1>
            <h2>HAPPY PEOPLE</h2>
        </div>
        <div className={`${styles.carouselbox} testimonialAutoplay`}>
        <Carousel autoplay className={styles.testimonalCarousel} >
            <div className={styles.boxTestimonalSection}>
                {list.map((list,i)=>{
                    return (
                        <div  key={i}className={styles.containerSection}>
                            <div className={styles.quotes}>
                                <img src="../dazko/quotes.png" alt="" />
                            </div>
                         <div className={styles.box}>
                            <div className={styles.paragraph}>
                                <p>{list.line}</p>
                            </div>
                            <div className={styles.imageSection}>
                                <div className={styles.testimonalImage}>
                                    <img src={list.image} alt="" />
                                </div>
                                <div className={styles.nameBox}>
                                    <h1>{list.name}</h1>
                                    <p>{list.header}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.boxTestimonalSection2}>
                {itmes.map((list,i)=>{
                    return (
                        <div  key={i}className={styles.containerSection}>
                        <div className={styles.quotes}>
                                <img src="../dazko/quotes.png" alt="" />
                            </div>
                         <div className={styles.box}>
                            <div className={styles.paragraph}>
                                <p>{list.line}</p>
                            </div>
                            <div className={styles.imageSection}>
                                <div className={styles.testimonalImage}>
                                    <img src={list.image} alt="" />
                                </div>
                                <div className={styles.nameBox}>
                                    <h1>{list.name}</h1>
                                    <p>{list.header}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </Carousel>
        </div>     
        <div className={`${styles.mobCarouselbox} testimonialAutoplay`}>
        <Carousel autoplay>
            <div>
            {mobItmes.map((list,i)=>{
                    return (
                        <div key={i} className={styles.containerSection}>
                        <div className={styles.quotes}>
                                <img src="../dazko/quotes.png" alt="" />
                            </div>
                        <div className={styles.box}>
                            <div className={styles.paragraph}>
                                <p>{list.line}</p>
                            </div>
                            <div className={styles.imageSection}>
                                <div className={styles.testimonalImage}>
                                    <img src={list.image} alt="" />
                                </div>
                                <div className={styles.nameBox}>
                                    <h1>{list.name}</h1>
                                    <p>{list.header}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>

            <div>
            {mobItmes.map((list,i)=>{
                    return (
                        <div key={i} className={styles.containerSection}>
                        <div className={styles.quotes}>
                                <img src="../dazko/quotes.png" alt="" />
                            </div>
                        <div className={styles.box}>
                            <div className={styles.paragraph}>
                                <p>{list.line}</p>
                            </div>
                            <div className={styles.imageSection}>
                                <div className={styles.testimonalImage}>
                                    <img src={list.image} alt="" />
                                </div>
                                <div className={styles.nameBox}>
                                    <h1>{list.name}</h1>
                                    <p>{list.header}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>

            <div>
            {mobItmes.map((list,i)=>{
                    return (
                        <div key={i} className={styles.containerSection}>
                        <div className={styles.quotes}>
                                <img src="../dazko/quotes.png" alt="" />
                            </div>
                        <div className={styles.box}>
                            <div className={styles.paragraph}>
                                <p>{list.line}</p>
                            </div>
                            <div className={styles.imageSection}>
                                <div className={styles.testimonalImage}>
                                    <img src={list.image} alt="" />
                                </div>
                                <div className={styles.nameBox}>
                                    <h1>{list.name}</h1>
                                    <p>{list.header}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>

            <div>
            {mobItmes.map((list,i)=>{
                    return (
                        <div key={i} className={styles.containerSection}>
                        <div className={styles.quotes}>
                                <img src="../dazko/quotes.png" alt="" />
                            </div>
                        <div className={styles.box}>
                            <div className={styles.paragraph}>
                                <p>{list.line}</p>
                            </div>
                            <div className={styles.imageSection}>
                                <div className={styles.testimonalImage}>
                                    <img src={list.image} alt="" />
                                </div>
                                <div className={styles.nameBox}>
                                    <h1>{list.name}</h1>
                                    <p>{list.header}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>

            <div>
            {mobItmes.map((list,i)=>{
                    return (
                        <div key={i} className={styles.containerSection}>
                        <div className={styles.quotes}>
                                <img src="../dazko/quotes.png" alt="" />
                            </div>
                        <div className={styles.box}>
                            <div className={styles.paragraph}>
                                <p>{list.line}</p>
                            </div>
                            <div className={styles.imageSection}>
                                <div className={styles.testimonalImage}>
                                    <img src={list.image} alt="" />
                                </div>
                                <div className={styles.nameBox}>
                                    <h1>{list.name}</h1>
                                    <p>{list.header}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>

        </Carousel>
        </div>  
    </section>
)
}

export default Testimonal;