describe('romanNumeral', function() {
  it("returns the correct numerals for a number of 3 or less", function() {
    expect(romanNumeral(3)).to.eql([0,0,0,0,0,0,3]);
  });

  it("returns the correct numerals for 4", function() {
    expect(romanNumeral(4)).to.eql([0,0,0,0,0,0,4])
  });

  it("returns the correct numerals for 999", function() {
    expect(romanNumeral(999)).to.eql([0,1,4,1,4,1,4])
  });

  it("returns the correct numerals for 3999", function() {
    expect(romanNumeral(3999)).to.eql([3,1,4,1,4,1,4])
  });
});

describe('romanize', function() {
  it("returns the correct roman numeral for a given number", function() {
    expect(romanize([0,0,1,1,0,1,4])).to.equal("CLIX")
  });
});
