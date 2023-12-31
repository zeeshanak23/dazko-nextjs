import React from "react"
import styles from "../src/styles//Pricing.module.css"
import { ArrowRightOutlined } from "@ant-design/icons"

const Pricing = () => {
    const list = [{
        title: "Basic Plan",
        price: "49",
        features: "Personal Trainer",
        features2: "Convienient Time",
        features3: "Special Class",
        features4: "Group Traning",
        features5: "Free Fitness Traning",
        button :"get started"
    },
    {
        title: "Beginner Plan",
        price: "79", 
        features: "Personal Trainer",
        features2: "Convienient Time",
        features3: "Special Class",
        features4: "Group Traning",
        features5: "Free Fitness Traning",
        button :"get started"
    },
    {
        title: "Premium Plan",
        price: "109", 
        features: "Personal Trainer",
        features2: "Convienient Time",
        features3: "Special Class",
        features4: "Group Traning",
        features5: "Free Fitness Traning",
        button :"get started"
    },
    {
        title: "ultimate Plan",
        price: "149",
        features: "Personal Trainer",
        features2: "Convienient Time",
        features3: "Special Class",
        features4: "Group Traning",
        features5: "Free Fitness Traning",
        button :"get started"
    }
    ]

    const PriceItem =[{
        image:"../dazko/equipment.png",
        title: "thousand of equipment",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        image:"../dazko/gymIcon.png",
        title: "OPEN 24/7 DAZKO GYM FITNESS",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        image:"../dazko/food.webp",
        title: "FOOD SUPPLEMENTS",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
]
    return(
        <section>
            <div className={styles.pricingHeader}>
                <h1>our pricing</h1>
                <h2>pricing & <span>packages</span></h2>
            </div>
            <div className={styles.pricingBox}> 
                {list.map((list,i)=>{
                    return (
                        
                        <div key={i} className={styles.boxContent} >
                            <h1>{list.title}</h1>
                            <h2 className={styles.number}><div className={styles.dolarSign}>$</div>{list.price}</h2>
                            <div className={styles.listFeatures}>
                                <div>
                            <ArrowRightOutlined className={styles.arrowIcon} /> <p>{list.features}</p></div>
                            <div>
                            <ArrowRightOutlined className={styles.arrowIcon} /> <p>{list.features2}</p></div>
                            <div>
                            <ArrowRightOutlined className={styles.arrowIcon} /> <p>{list.features2}</p></div>
                            <div>
                            <ArrowRightOutlined className={styles.arrowIcon} /> <p>{list.features4}</p></div>
                            <div>
                            <ArrowRightOutlined className={styles.arrowIcon} /> <p>{list.features5}</p></div>                            
                            </div>
                            <button className={styles.priceListBtn}>{list.button}</button>
                        </div>
                        
                    )
                })}
            </div>
            <div className={styles.priceContent}>
                {PriceItem.map((image,i)=>{
                    return (
                        <div key={i} className={styles.pricingBoxItem}>
                        <div className={styles.priceItem}>
                            <div className={styles.priceItemImage}>
                                <img src={image.image} alt="images" />
                            </div>
                            <div className={styles.priceItemHeading}>
                                <h1>{image.title}</h1>
                                <p>{image.description}</p>
                            </div>
                        </div>
                        </div>
                    )
                })} 
            </div>
        </section>
    )
}
export default Pricing;