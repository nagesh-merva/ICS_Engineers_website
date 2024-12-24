import React, { useState } from "react"

const SearchBar = () => {
    const [Search, setSearch] = useState('')


    return (
        <div className="flex flex-1 gap-3 px-2.5 py-2 my-auto text-lg font-medium whitespace-nowrap rounded-xl bg-stone-200 text-stone-400">
            <img
                loading="lazy"
                src="/icons/search.png"
                alt=""
                className="object-contain shrink-0 w-5 aspect-square"
            />
            <label className="basis-auto">Search</label>
            <input type="text" className=" bg-stone-200 outline-none" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}
export default SearchBar