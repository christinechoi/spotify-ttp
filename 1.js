function sortByStrings(s, t) {
  let str = s.split('')
			 .map(char => t.indexOf(char)) 
			 .sort((a, b) => a-b);
	 
  return str.map(char => t[char]).join('') 
}
