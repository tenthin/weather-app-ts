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
}