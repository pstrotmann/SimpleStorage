const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", accounts => {
  it("should store 17 into SimpleStorage", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();
    
    
    // set simpleStorage
    await simpleStorageInstance.set(17, { from: accounts[0] });

    // Get stored person
    const storedData = await simpleStorageInstance.get();

    assert.equal(storedData, 17, "The value 17 was not stored.");
    
  });
});
