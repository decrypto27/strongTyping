
const calculateSquare = (input) => {
    if (!input) {
      throw new Error("Argument is missing");
    }
  
    if (!Array.isArray(input)) {
      throw new Error("Argument must be an array");
    }
  
    var ans = [];
  
    for (var i = 0; i < input.length; i++) {
      if (typeof input[i] !== "number") {
        throw new Error("Array must contain valid numbers only");
      } else {
        ans[i] = (input[i] * input[i]);
      }
    }
    return ans;
  };