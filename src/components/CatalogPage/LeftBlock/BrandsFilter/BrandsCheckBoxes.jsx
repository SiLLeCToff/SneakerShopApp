import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {clearFilters, filterSneakers, setFiltersDefault} from "../../../../store/sneakersSlice.jsx";
import {useLocation} from "react-router-dom";

export default function BrandsCheckBoxes() {
    const dispatch = useDispatch()
    const location = useLocation();
    const brandLocation =Number(new URLSearchParams(location.search).get("brand"));
    const brands = useSelector((state)=> state.brand)


    const filters = useSelector((state) => state.sneakers.filters);

    const [brandId, setBrandId] = useState(filters.brandId);



    const handleCheckboxChange = (e) => {
        const brand = parseInt(e.target?.id);
        if (!isNaN(brand)) {
            const updatedFilters = {
                ...filters,
                brandId: filters.brandId.includes(brand)
                    ? filters.brandId.filter((id) => id !== brand)
                    : [...filters.brandId, brand],
            };



            // Обновите фильтры через Redux экшен
            dispatch(filterSneakers(updatedFilters));

            setBrandId(updatedFilters.brandId);
        }
    };



    useEffect(() => {
        const fetchData = () => {
            if (brandLocation !== 0 && brandId[0] !== brandLocation) {
                const updatedFilters = {
                    ...filters,
                    brandId: [brandLocation],
                };
                dispatch(filterSneakers(updatedFilters));


            } else {dispatch(clearFilters())
            }
        };

        fetchData();
    }, [brands, brandId]);

    return (
        <fieldset>
            <div className="space-y-0">
                {brands.map((brand , index) => (<div key={index} className="relative flex items-center">
                    <div className="flex h-6 items-center">
                        <input
                            id={brand.id}
                            name={brand.id}
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-black focus:ring-indigo-600 cursor-pointer"
                            onChange={handleCheckboxChange}
                            checked={filters.brandId.includes(brand.id)}
                        />
                    </div>
                    <div className="flex ml-2 text-sm leading-6">
                        <label htmlFor={brand.id} className="font-light text-gray-900 text-xl cursor-pointer whitespace-nowrap">
                            {brand.name}
                        </label>
                    </div>
                </div>))}
            </div>
        </fieldset>
    )
}
