import {processData} from "../processData"



test('test with sample data',  async () => {
    expect(await processData('tests/sampleData.txt')).toStrictEqual(
      [{
      "FROM_TIPLOC": 'ARLSEY',
      "TO_TIPLOC": 'BIGLSWD',
      "DISTANCE": 6638,
      
    }])
})

