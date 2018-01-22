
let square = (input: Array<number>): Array<number> => {
    var ans = [];
    for (var i = 0; i < input.length; i++) {
      ans[i] =  (input[i] * input[i]);
    }
  
    return ans;
  };

  // Errors of type : TypeError: Cannot read property ‘length’ of undefined
// less number of unit tests