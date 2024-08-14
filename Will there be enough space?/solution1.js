function enough(cap, on, wait) {
  let available = cap - on;
  
  if (available >= wait) {
    return 0;  
  } else {
    let out = wait - available;
    return out;  
  }
}
