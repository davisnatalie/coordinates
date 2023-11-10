import React from 'react';

function SearchInput({ handleSubmit, searchPlace, setSearchPlace }) {
  const test = (e) => {
    setSearchPlace(e.target.value);
  };

  const handleResetForm = () => {
    // Reload the page
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={searchPlace} onChange={(e) => test(e)} />
        <br />
        <br />
        <button class="button" type="submit" onChange={(e) => test(e)}>Search</button>
        
        <button class="button" type="button" onClick={handleResetForm}> Reset Form </button>
      </form>
    </div>
  );
}

export default SearchInput;
