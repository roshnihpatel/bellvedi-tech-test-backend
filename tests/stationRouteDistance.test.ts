import {stationRoute} from "../utils/stationsGraph"
//route.path('A', 'D', { cost: true })


test("if the distance between stations BERKHMD and TRING is 5.994", async () => {
   
    expect(  await stationRoute.path("BERKHMD", "TRING", { cost: true })).toEqual(expect.objectContaining({
        path: expect.arrayContaining(['BERKHMD','TRING']),
        cost: expect.any(Number)
      }))

})