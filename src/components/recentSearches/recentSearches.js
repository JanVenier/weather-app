import './recentSearches.css'
import goToIcon from '../../img/go-to-icon-18.jpg'

const RecentSearches = ({recentSearches, itemClickHandler, setSearch}) => {

    return (
        <div>
            <h4 className={'recent-searches-heading'}>Check again</h4>
            <ul className={'recent-searches'}>
                {recentSearches.map((searchEntry) => {

                        const [name, countryCode] = searchEntry.label.split(',');
                        return (
                            <li className={'recent-searches-entry'} onClick={() => {setSearch(searchEntry); itemClickHandler(searchEntry);}} key={searchEntry.label}>
                                <img className={'country-flag'} src={`https://flagsapi.com/${countryCode.trim()}/shiny/64.png`} alt={''}/>
                                <span>{name}</span>
                                <img className={'icon-go-to'} src={goToIcon} alt={''}/>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>

    )
}

export default RecentSearches;