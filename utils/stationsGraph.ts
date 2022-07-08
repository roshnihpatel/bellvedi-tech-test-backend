const Graph = require('node-dijkstra')
import {processData} from "./processData"
import {StationData} from "./processData";

export function createGraph(filepath:string){
    const route = new Graph;
    
         const tracksArray =  processData(filepath)
         const allStations:string[] =[]
         
         tracksArray.map( (stationData: StationData) => {
            const cost = stationData.DISTANCE
            const startNode =  stationData.FROM_TIPLOC
            const goalNode = stationData.TO_TIPLOC
            if(cost && startNode && goalNode){
                const c = new Map()
                c.set(goalNode, cost)
                route.addNode(startNode, c)
            }
            if(!allStations.includes(startNode)){
                allStations.push(startNode)
            }
            if(!allStations.includes(goalNode)){
                allStations.push(goalNode)
            }
         })
    

    return [route, allStations]

}


export const [stationRoute, allStationsList] = createGraph('data/stationsData.txt')
//console.log(stationRoute)
