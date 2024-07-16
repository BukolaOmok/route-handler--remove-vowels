const removeVowels = (word: string) => {
    const vowelCharacters: string[] = ["a", "e", "i", "o", "u"];
    let newWord: string = "";
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i].toLowerCase(); 

      if (!vowelCharacters.includes(char)) {
        newWord += char;
      }
    }
  
    return newWord;
  };


export { removeVowels }