import React from "react";


const ProductCategoryRow = () => {
    const category = this.props.category;
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

export default ProductCategoryRow;