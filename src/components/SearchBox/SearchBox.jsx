import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css"
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={css.serch}>
            <label htmlFor="search">Find contacts by name</label>
            <input className={css.field} type="text" id="search" value={filter} onChange={handleChange}/>
        </div>
    )
};

export default SearchBox;
