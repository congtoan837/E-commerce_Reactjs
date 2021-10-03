import React from "react";

import Helmet from "../../components/Helmet";
import Section, {SectionBody} from "../../components/Section";
import Grid from "../../components/Grid";
import productData from "../../assets/fake-data/products";
import ProductCard from "../../components/ProductCard";
import {Breadcrumb, Pagination} from "react-bootstrap";

export default function Catalog() {
    return (
        <Helmet title="Sản phẩm">
            <div className="content">
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item active>Sản phẩm</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container-title">
                    <h1>Sản phẩm</h1>
                </div>
                <div className="product-sidebar">
                    <div className="category">
                        <a className="category-item" href="#">
                            <div>test</div>
                            <div>69</div>
                        </a>
                        <a className="category-item" href="#">
                            <div>test</div>
                            <div>69</div>
                        </a>
                        <a className="category-item" href="#">
                            <div>test</div>
                            <div>69</div>
                        </a>
                        <a className="category-item" href="#">
                            <div>test</div>
                            <div>69</div>
                        </a>
                    </div>

                    <div className="filter">
                        <div className="filter-title">
                            <h2>Bộ lọc</h2>
                        </div>
                        <div className="filter-group">
                            <div className="filter-group-header">
                                <h5>Giá tiền</h5>
                            </div>
                            <div className="filter-group-body">
                                <div className="filter-group-body-content">
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Từ 50k - 99k</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Từ 100k - 299k</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="product-container">
                    <Section>
                        <div className="product-container-sort">
                            <div className="product-container-sort-right">
                                <div className="product-container-sort-title">Sắp xếp</div>
                                <div className="product-container-sort-section">
                                    <select className="form-select">
                                        <option selected>Giá từ cao đến thấp</option>
                                        <option>none</option>
                                        <option>none</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <SectionBody>
                            <Grid
                                col={4}
                                mdCol={2}
                                smCol={1}
                                gap={10}
                            >
                                {
                                    productData.getProducts(8).map((item, index) => (
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
                    <div className="product-container-sort">
                        <div className="product-container-sort-left">
                            <div className="product-container-sort-title">Hiển thị</div>
                            <div className="product-container-sort-section">
                                <select className="form-select">
                                    <option selected>8</option>
                                    <option>none</option>
                                    <option>none</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-container-sort-right">
                            <Pagination className="justify-content-end">
                                <Pagination.First/>
                                <Pagination.Prev/>
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Next/>
                                <Pagination.Last/>
                            </Pagination>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </Helmet>
    )
}
