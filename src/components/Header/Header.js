import React from 'react'
import "./Header.css";
import { createTheme, MenuItem, MuiThemeProvider, TextField } from '@material-ui/core';
import categories from '../../data/category';
import { debounce } from "lodash";


const Header = ({ category, setCategory, word, setWord, lightMode, setMeanings}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#fff"
            },
            type: lightMode ? "light" : "dark",
        },
    });

    const handleChange = (language) => {
          setCategory(language);
          setWord("");
          setMeanings([]);
    };

    const handleText = debounce((text) => {
        setWord(text);
      }, 500);

    
    return (
        <div className="header">
            <span className="title">{ word ? word: "Word book" }</span>
            <div className="inputs">
                <MuiThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search"
                        label="Search a word"
                        onChange={(event) => handleText(event.target.value)}
                    />
                        <TextField
                            className="select"
                            select
                            label="Language"
                            value={category}
                            onChange={(event) => handleChange(event.target.value)} 
                        >
                        {categories.map((option) => (
                            <MenuItem
                                key= {option.label}
                                value= {option.label}
                            >
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </MuiThemeProvider>
            </div>
        </div>
    )
};

export default Header;
