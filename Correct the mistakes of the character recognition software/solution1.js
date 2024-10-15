function correct(string)
{
	return string.replace(/[501]/g, (match) => {
    switch (match) {
        case "5": return "S";
        case "0": return "O";
        case "1": return "I";
    }
  });
};
