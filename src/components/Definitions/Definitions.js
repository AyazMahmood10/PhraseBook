import React from 'react'
import "./Definitions.css"

const Definitions = ({ meanings, word, lightMode }) => {
    return (
        <div className="meanings">
            {
                word === "" ? (
                    <span className="subTitle">Start by typing a word in search</span>
                  ) : (
                    meanings.map((mean) =>
                      mean.meanings.map((item) =>
                        item.definitions.map((def) => (
                          <div
                            className="singleMean"
                            style={{
                              backgroundColor: lightMode ? "white" : "#3b5360" ,
                              color: lightMode ? "black" : "white",
                            }}
                          >
                            <b>{def.definition}</b>
                            <hr style={{ backgroundColor: "black", width: "100%" }} />
                            {def.example && (
                              <span>
                                <b>Example :</b> {def.example}
                              </span>
                            )}
                            {def.synonyms && (
                              <span>
                                <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                              </span>
                            )}
                          </div>
                        ))
                      )
                    )
                  )}
                </div>
              );
            };
            
export default Definitions;