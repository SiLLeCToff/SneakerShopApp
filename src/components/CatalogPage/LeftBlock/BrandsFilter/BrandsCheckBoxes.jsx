import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {clearFilters, filterSneakers, setFiltersDefault} from "../../../../store/sneakersSlice.jsx";
import {useLocation} from "react-router-dom";

export default function BrandsCheckBoxes() {
    const dispatch = useDispatch()
    const location = useLocation();
    const brandLocation =Number(new URLSearchParams(location.search).get("brand"));
    const brands = useSelector((state)=> state.brand)
    const brandIds = brands.map(brand => brand.id);

    const filters = useSelector((state) => state.sneakers.filters);
    const brandI = useSelector((state)=> state.sneakers.filters.brandId)

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
        const fetchData = async () => {
            if (brandLocation !== 0 && brandId[0] !== brandLocation) {
                const updatedFilters = {
                    ...filters,
                    brandId: [brandLocation],
                };
                await dispatch(filterSneakers(updatedFilters));


            } else {
              await  dispatch(clearFilters())
            }
        };

        fetchData();
    }, [brandLocation, brandIds, brandId, filters, dispatch]);

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
                        <label htmlFor={brand.id} className="font-light text-gray-900 text-xl cursor-pointer">
                            {brand.name}
                        </label>
                    </div>
                </div>))}
            </div>
        </fieldset>
    )
}
