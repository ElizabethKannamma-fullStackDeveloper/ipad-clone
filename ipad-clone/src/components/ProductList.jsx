import React from 'react';

const ProductList = ({ img1, img2, img3, img4, img5, img6 }) => {
    return (
        <>
            <hr />
            <div className="product-tile">
                <div className="tile-subheading">13" or 11"</div>
                <div className="tile-copy">
                    <p>
                        Ultra Retina XDR display <br />
                        ProMotion technology <br />
                        P3 wide color <br />
                        Nano-texture display glass option <br /> on 1TB and 2TB models
                    </p>

                </div>

                <div className="tile-icon-wrapper">
                    <img
                        src={img1}
                        alt="Product Icon"
                    />
                    <p>M4 chip</p>
                    <img
                        src={img2}
                        alt="Product Icon"
                    />
                    <p>Apple Intelligence1</p>
                    <img
                        src={img3}
                        alt="Product Icon"
                    />
                    <p>12MP Wide camera <br />

                        4K video, ProRes</p>
                    <img
                        src={img4}
                        alt="Product Icon"
                    />
                    <p>Landscape 12MP Ultra Wide front camera <br />

                        TrueDepth camera system</p><img
                        src={img5}
                        alt="Product Icon"
                    />
                    <p>Supports Apple Pencil Pro <br />

                        Supports Apple Pencil (USB-C)</p><img
                        src={img6}
                        alt="Product Icon"
                    />
                    <p>Supports Magic Keyboard for iPad Pro (M4)</p>

                </div>
            </div>
        </>
    );
};

export default ProductList;
