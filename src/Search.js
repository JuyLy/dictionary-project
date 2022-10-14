import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
    let [word, setWord] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function lookup(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWordChange(event) {
        setWord(event.target.value);
    }

    return (
      <div className="Search justify-content-center">
        <form className="search-form" onSubmit={lookup}>
      <div className="row justify-content-center">
        <div className="col-4">
          <input
            type="search"
            placeholder="Type a word.."
            autoFocus="on"
            autoComplete="off"
            id="city-input"
            className="form-control shadow-sm"
            onChange={handleWordChange}
          />
        </div>
        <div className="col-1">
          <input
            type="submit"
            value="Search"
            id="btn"
            className="form-control btn btn-info shadow-sm text-light"
          />
        </div>
      </div>
      </form>
      </div>
    );
}