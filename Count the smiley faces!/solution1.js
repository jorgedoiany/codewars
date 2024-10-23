function countSmileys(arr) {
  
  let validFaces = 
[
":-)",
":~)",
";-)",
";~)",
":)",
";)",
":-D",
":~D",
";-D",
";~D",
":D",
";D"
];
  
  let smileyFaces = 0;
  
  for (let i = 0; i < arr.length; i++) {
    validFaces.includes(arr[i]) ? smileyFaces++ : smileyFaces;
  }
  
  return smileyFaces;
}
