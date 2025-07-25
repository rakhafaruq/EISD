import './Component.css';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">
                    Price: ${product.price.toFixed(2)}
                </p>
                <p className="product-rating">
                    Rating: {product.rating.rate}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;