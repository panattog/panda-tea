class PandaTea {
    constructor() {
      this.teaData = {};
    }
  
    setTeaData(key, value) {
      this.teaData[key] = value;
      console.log(`Set Panda Tea data for key '${key}':`, value);
    }
  
    getTeaData(key) {
      const value = this.teaData[key];
      return value;
    }
  }
  
  // Example usage:
  const pandaTea = new PandaTea();
  
  pandaTea.setTeaData('flavor', 'Bamboo Delight');
  pandaTea.setTeaData('rating', 4.5);
  
  const retrievedFlavor = pandaTea.getTeaData('flavor');
  const retrievedRating = pandaTea.getTeaData('rating');
  const retrievedUnknown = pandaTea.getTeaData('unknownKey');
  
  console.log('Retrieved Panda Tea data for unknownKey:', retrievedUnknown);
  