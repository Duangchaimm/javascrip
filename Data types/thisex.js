const cat = {
    name: "Pipey",
    age: 8,
    WhatName() {
        return this.name;
    },
};

console.log(cat.WhatName());
// Output: Pipey
cat.name = "Nezzer";
console.log(cat.WhatName());