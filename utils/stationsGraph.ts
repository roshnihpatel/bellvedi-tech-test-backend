const Graph = require('node-dijkstra')
import {processData} from "./processData"
import {StationData} from "./processData";

export function createGraph(filepath:string){
    const route = new Graph;
    
         const stationsArray =  processData(filepath)
         
         
         stationsArray.map( (stationData: StationData) => {
            const cost = stationData.DISTANCE
            if(cost){
                const c = new Map()
                const startNode =  stationData.FROM_TIPLOC
                const goalNode = stationData.TO_TIPLOC
                c.set(goalNode, cost)
                route.addNode(startNode, c)
            } })
    

    return route

}


export const stationRoute = createGraph('data/stationsData.txt')
//console.log(stationRoute)
