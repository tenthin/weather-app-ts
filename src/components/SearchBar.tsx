import{useState, type FormEvent} from "react";

interface SearchBarProps{
    onSearch:(city: string) => void;
}

function SearchBar({onSearch}: SearchBarProps){
    const [city,setCity] = useState("");

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!city) return;

        onSearch(city);
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;