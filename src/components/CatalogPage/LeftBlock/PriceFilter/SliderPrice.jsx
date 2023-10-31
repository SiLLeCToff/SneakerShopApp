import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux";
import {filterSneakers} from "../../../../store/sneakersSlice.jsx";


const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 20,
        width: 6,
        borderRadius: 3,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        border: '1px solid black',
        // '&:hover': {
        //     boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.16)',
        // },
            '&:focus' : {
            color: 0,
                backgroundColor: 0,
            }
    },
    '& .MuiSlider-track': {
        height: 9,
        color: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(207,192,215,0.84)',
    },
    '& .MuiSlider-rail': {
        outline: 'none',
        color: theme.palette.mode === 'dark' ? '#EFEFEF' : '#EFEFEF',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 9,
    },
}))

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
};

export default function SliderPrice() {
    const dispatch = useDispatch()



    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(55000);

    const filters = useSelector((state) => state.sneakers.filters);

    const handleSliderChange = (event, newValue) => {
        const updatedFilters = {
            ...filters,
            minPrice: newValue[0],
            maxPrice: newValue[1]
        };
        setMinPrice(newValue[0]);
            setMaxPrice(newValue[1]);
        dispatch(filterSneakers(updatedFilters));
    };

    useEffect(() => {
        dispatch(filterSneakers(filters));
    }, [filters, dispatch]);

    return (
<div className="flex flex-col w-full">
            <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={[0, 55000]}
                min={0} // Устанавливаем минимальное значение
                max={550000}
                step={50}
                onChange={handleSliderChange}
            />
    <div className="flex justify-between">
        <p>{minPrice  === 0 ? null : minPrice}</p>
        <p>{maxPrice}</p>
    </div>
</div>

    );
}

SliderPrice.propTypes = {
    onFilteredSneakersChange: PropTypes.func.isRequired,
};