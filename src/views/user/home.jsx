import React from "react";

import Helmet from "../../components/Helmet";
import HeroSlider from "../../components/HeroSlider";
import Section, {SectionBody, SectionTitle} from "../../components/Section";
import Grid from "../../components/Grid";
import PolicyCard from "../../components/PolicyCard";
import ProductCard from "../../components/ProductCard"

import heroSliderData from "../../assets/fake-data/hero-slider";
import productData from "../../assets/fake-data/products";
import policy from "../../assets/fake-data/policy";

import {Link} from "react-router-dom";

export default function Home() {
    return (
        <Helmet title="Trang chủ">
            {/* slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />
            {/* slider */}

            {/* policy */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* policy */}

            {/* popular product */}
            <Section>
                <SectionTitle>
                    Sản phẩm phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            productData.getProducts(5).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}
        </Helmet>
    )
}
