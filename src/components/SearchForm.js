import React from "react";

const SearchForm = (props) => {

    const handleChange = event => {
        props.setSearch(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()
    }

    return (
        <div className="search-form">
            <form onSubmit={onSubmit}>
                <input
                    name="search"
                    placeholder="Search for recipe"
                    onChange={handleChange}
                />
            </form>
        </div>

    )
}

export default SearchForm;