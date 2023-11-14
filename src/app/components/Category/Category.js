// import { React, useEffect, useMemo, useState } from 'react'

// const Category = ({ name, category }) => (
//     <div className="item-container">
//         <div>
//             <span className="item-label">Name:</span>
//             {name}
//         </div>
//         <div>
//             <span className="item-label">Category:</span>
//             {category}
//         </div>
//     </div>
// );

// export default function CategoryTable() {
//     var defaultSports = [
//         { name: "Table Tennis", category: "Indoor" },
//         { name: "Football", category: "Outdoor" },
//         { name: "Swimming", category: "Aquatics" },
//         { name: "Chess", category: "Indoor" },
//         { name: "BaseBall", category: "Outdoor" }
//     ];

//     const [sportList, setSportList] = useState([]);

//     const [selectedCategory, setSelectedCategory] = useState();

//     useEffect(() => {
//         setSportList(defaultSports);
//     }, []);

//     function getFilteredList() {
//         if (!selectedCategory) {
//             return sportList;
//         }
//         return sportList.filter((item) => item.category === selectedCategory);
//     }

//     var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

//     function handleCategoryChange(event) {
//         setSelectedCategory(event.target.value);
//     }

//     return (
//         <div className="app">
//             <div className="filter-container">
//                 <div>Filter by Category:</div>
//                 <div>
//                     <select
//                         name="category-list"
//                         id="category-list"
//                         onChange={handleCategoryChange}
//                     >
//                         <option value="">All</option>
//                         <option value="Outdoor">Outdoor</option>
//                         <option value="Indoor">Indoor</option>
//                         <option value="Aquatics">Aquatics</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="product-list">
//                 {filteredList.map((element, index) => (F
//                     <Category {...element} key={index} />
//                 ))}
//             </div>
//         </div>
//     );
// }