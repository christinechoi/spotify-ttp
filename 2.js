// assumes any empty strings will be represented as "" 

function decodeString(string) {
  // get innermost bracket indices
  const innerOpenBkt = string.lastIndexOf('[');
  const innerCloseBkt = string.indexOf(']');
  // get innermost string inc. brackets 
  const innerBkts = string.slice(innerOpenBkt, innerCloseBkt + 1);
  let innerStr = string.slice(innerOpenBkt + 1, innerCloseBkt);
  // remove innermost brackets, leaving inner string 
  const modStr = string.replace(innerBkts, innerStr);
  const outerOpenBkt = modStr.lastIndexOf('[');
  // base case 
  if (outerOpenBkt === -1) {
    const repeatNum = modStr.slice(0, innerOpenBkt);
    return innerStr.repeat(repeatNum);
  } 
  // otherwise get index of innermost closing bracket
  const outerCloseBkt = modStr.indexOf(']');
  // and contents of innermost brackets (excl. brackets)
  const numSlice = modStr.slice(outerOpenBkt + 1, outerCloseBkt);
  // get number of times to repeat inner string
  const repeatNum = numSlice.match(/[0-9][0-9]*/);
  const innerSlice = numSlice.slice(repeatNum.index);
  innerStr = innerStr.repeat(repeatNum[0]);
  finalStr = modStr.replace(innerSlice, innerStr);

  return decodeString(finalStr);
}

