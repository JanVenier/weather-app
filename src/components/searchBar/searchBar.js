
import {AsyncPaginate} from "react-select-async-paginate";
import {citiesApiOptions, citiesApiUrl} from "../../api";

import './searchBar.css';

const SearchBar = ({onSearchChange, searchValue, setSearch}) => {

    const handleChange = (cityApiData) => {

        setSearch(cityApiData);
        onSearchChange(cityApiData);
    }

    const loadOptions = async (inputVal) => {

        try {
            const response = await fetch(`${citiesApiUrl}?namePrefix=${inputVal}`, citiesApiOptions);
            const result = await response.json();

            return {
                options: result.data.map((city) => {

                    return {
                        label: `${city.name}, ${city.countryCode}`,
                        value: `${city.latitude},${city.longitude}`,
                    }
                })
            }
        } catch (error) {

            console.error(error);
        }
    }

    return (
        <AsyncPaginate
            placeholder="Enter city name"
            debounceTimeout={600}
            value={searchValue}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    )
}

export default SearchBar;