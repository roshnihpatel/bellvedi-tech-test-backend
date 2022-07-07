import fs from 'fs';
 
export interface StationData {
  "FROM_TIPLOC": string;
  "TO_TIPLOC": string;
  "DISTANCE": number;

}


export  function processData(filepath:string){
  
  try {
      const data =  fs.readFileSync(filepath, 'utf8')
      const rows = data.split(/\n|$/g)
      const stationDict: StationData[] = []
      for(let i = 1; i< rows.length; i++){
        const currentRow = rows[i].split(/,/g)
        const  [fromTiploc, toTiploc, distance, electric, passengerUse, lineCode] = currentRow
        // console.log('current row',currentRow)
        stationDict.push({"FROM_TIPLOC":fromTiploc, "TO_TIPLOC": toTiploc,"DISTANCE": parseInt(distance)})
      }
      return stationDict

    } catch (err) {
      throw err  
    }
 }
   
     



