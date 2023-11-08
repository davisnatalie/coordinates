// This component can be plugged in anywhere, but the following must be set up on the parent component:
// 1. a function called 'handleSubmit' that uses the search Place
// 2. const [searchPlace, setSearchPlace] = useState("")

// When using this component, you must hand down props like this:
// <SearchInput handleSubmit={handleSubmit} searchWord={searchWord} setSearchWord={setSearchWord} />

function SearchInput({handleSubmit, searchPlace, setSearchPlace}) {
    function test(e) {
        // console.log(searchPlace)
        setSearchPlace(e.target.value)
    }
    return (  
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text"
                value={searchPlace}
                onChange={(e) => test(e)}
            />
        </form>
    );
}

export default SearchInput;