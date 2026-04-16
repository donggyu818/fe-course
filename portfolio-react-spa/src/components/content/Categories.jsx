import React, { useState } from "react";


export default function Categories({ categories }) {
    // console.log('카테고리 ==> ',categories);
    const [category, setCategory] = useState("");
    // console.log(category);   마우스 올릴 때마다 F12 에 출력됨.
    
    return (
        <ul class="categories">
            {categories?.map( (item, idx) => 
                <li key={idx}>
                    { category === item.category ? 
                    <button className="category active" onMouseOver={() => setCategory(item.category)}>{item.category}
                    {/* onMouseOver : 마우스를 올렸을 때 */}
                        <span className="category-count">{item.count}</span>
                    </button>
                    :
                    <button className="category" onMouseOver={() => setCategory(item.category)}>{item.category}
                        <span className="category-count">{item.count}</span>
                    </button>
                    }
                </li>
            )}
        </ul>
    );
}