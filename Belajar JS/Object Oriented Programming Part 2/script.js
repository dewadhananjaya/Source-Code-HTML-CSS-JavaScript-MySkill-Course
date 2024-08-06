{  
    // Case 1
      class Person {
        #age
        constructor(name, age) {
            this.name = name
            this.#age = age
            this.relationship = 'In shambles'
        }

        // Method to get the private age
        getAge() {
            return this.#age
        }
      }
      // write your code here
        const personOne = new Person("zaky", 17)
       document.getElementById("Case1").innerHTML = personOne.getAge()
      // expected 17
    }
    // End of Case 1    