var Triangle = {
  invalid: function() {
    if (this.sideOne >= this.sideTwo + this.sideThree || this.sideTwo >= this.sideOne + this.sideThree || this.sideThree >= this.sideOne + this.sideTwo) {
      alert("invalid triangle measurements");
      return false;
    }
  },

  type: function() {
    if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
      return "equilateral";
    } else if (this.sideOne === this.sideTwo || this.sideTwo === this.sideThree || this.sideOne === this.sideThree) {
      return "isosceles";
    } else if (this.sideOne !== this.sideTwo && this.sideTwo !== this.sideThree && this.sideOne !== this.sideThree) {
      return "scalene";
    }
  },

  list: function() {
    return this.sideOne + ", " + this.sideTwo + ", " + this.sideThree;
  }
};
