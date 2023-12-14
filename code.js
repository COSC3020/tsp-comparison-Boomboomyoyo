function tsp_hk(distance_matrix) {
    if(distance_matrix.length < 2)
    {
      return 0
    }
    allCities = new Set([])
    for(i = 0; i < distance_matrix.length; i++)
    {
      allCities.add(i)
    }
    minimum = Infinity
    cache = []
    for(i = 0; i < distance_matrix.length; i++)
    {
      temp = heldKarp(distance_matrix, i, allCities, cache)
      if(minimum > temp)
      {
        minimum = temp
      }
    }
    cache = []
    return minimum
}
  
function heldKarp(dist, start = 0, unvisited, cache) {
    var key = JSON.stringify(Array.from(unvisited).sort())
    if(cache[key] === undefined)
    {
      cache[key] = [];
    }
    if(cache[key][start] !== undefined)
    {
      return cache[key][start];
    }
    if(unvisited.size == 2)
    {
      let temp = Array.from(unvisited)
      return dist[temp[0]][temp[1]]
    }
    let min = Infinity
    for(let city of unvisited)
    {
      if(city != start)
      {
        let nextCities = new Set(unvisited)
        nextCities.delete(start)
        let temp = heldKarp(dist, city, nextCities, cache) + dist[start][city]
        if(min > temp)
        {
          min = temp
        }
      }
    }
    cache[key][start] = min
    return min
}

function tsp_ls(distance_matrix) {
    path = []
    for(i = 0; i < distance_matrix.length; i++)
    {
        path.push(i)
    }
    shuffleArray(path)
    totalAttempts = path.length ** 3
    previousLength = Infinity
    pathLength = Infinity
    for(let c = 0; c < totalAttempts; c++)
    {
        index1 = Math.floor(Math.random()*path.length)
        index2 = Math.floor(Math.random()*path.length)
        twoOptSwap(path, index1, index2)
        path = path.flat()
        pathLength = sumDistance(distance_matrix, path)
        if(pathLength < previousLength)
        {
            previousLength = pathLength
        }
    }
    return pathLength
}

function sumDistance(distGraph, pathIndexes)
{
    accum = 0
    for(let i = 0; i < pathIndexes.length-1; i++)
    {
        accum += distGraph[pathIndexes[i]][pathIndexes[i+1]]
    }
    return accum
}

function twoOptSwap(route, i, k)
{
    temp = route.splice(i, k)
    route.splice(i, 0, temp.reverse())
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}