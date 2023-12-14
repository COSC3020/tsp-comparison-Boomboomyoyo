const fs = require('fs');
//const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');
temp = Infinity

dm = graphGenerator(1);
console.time("Size 1 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 1 Matrix TSP Held-Karp")
console.time("Size 1 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 1 Matrix TSP Local Search")

dm = graphGenerator(2);
console.time("Size 2 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 2 Matrix TSP Held-Karp")
console.time("Size 2 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 2 Matrix TSP Local Search")

dm = graphGenerator(3);
console.time("Size 3 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 3 Matrix TSP Held-Karp")
console.time("Size 3 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 3 Matrix TSP Local Search")

dm = graphGenerator(4);
console.time("Size 4 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 4 Matrix TSP Held-Karp")
console.time("Size 4 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 4 Matrix TSP Local Search")

dm = graphGenerator(5);
console.time("Size 5 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 5 Matrix TSP Held-Karp")
console.time("Size 5 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 5 Matrix TSP Local Search")

dm = graphGenerator(6);
console.time("Size 6 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 6 Matrix TSP Held-Karp")
console.time("Size 6 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 6 Matrix TSP Local Search")

dm = graphGenerator(7);
console.time("Size 7 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 7 Matrix TSP Held-Karp")
console.time("Size 7 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 7 Matrix TSP Local Search")

dm = graphGenerator(8);
console.time("Size 8 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 8 Matrix TSP Held-Karp")
console.time("Size 8 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 8 Matrix TSP Local Search")

dm = graphGenerator(9);
console.time("Size 9 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 9 Matrix TSP Held-Karp")
console.time("Size 9 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 9 Matrix TSP Local Search")

dm = graphGenerator(10);
console.time("Size 10 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 10 Matrix TSP Held-Karp")
console.time("Size 10 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 10 Matrix TSP Local Search")

dm = graphGenerator(11);
console.time("Size 11 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 11 Matrix TSP Held-Karp")
console.time("Size 11 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 11 Matrix TSP Local Search")

dm = graphGenerator(12);
console.time("Size 12 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 12 Matrix TSP Held-Karp")
console.time("Size 12 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 12 Matrix TSP Local Search")

dm = graphGenerator(13);
console.time("Size 13 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 13 Matrix TSP Held-Karp")
console.time("Size 13 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 13 Matrix TSP Local Search")

dm = graphGenerator(14);
console.time("Size 14 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 14 Matrix TSP Held-Karp")
console.time("Size 14 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 14 Matrix TSP Local Search")

dm = graphGenerator(15);
console.time("Size 15 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 15 Matrix TSP Local Search")
console.time("Size 15 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 15 Matrix TSP Held-Karp")

dm = graphGenerator(16);
console.time("Size 16 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 16 Matrix TSP Local Search")
console.time("Size 16 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 16 Matrix TSP Held-Karp")

dm = graphGenerator(17);
console.time("Size 17 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 17 Matrix TSP Local Search")
console.time("Size 17 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 17 Matrix TSP Held-Karp")

dm = graphGenerator(18);
console.time("Size 18 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 18 Matrix TSP Local Search")
console.time("Size 18 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 18 Matrix TSP Held-Karp")

dm = graphGenerator(19);
console.time("Size 19 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 19 Matrix TSP Local Search")
console.time("Size 19 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 19 Matrix TSP Held-Karp")

dm = graphGenerator(20);
console.time("Size 20 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 20 Matrix TSP Local Search")
console.time("Size 20 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 20 Matrix TSP Held-Karp")


dm = graphGenerator(21);
console.time("Size 21 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 21 Matrix TSP Local Search")
console.time("Size 21 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 21 Matrix TSP Held-Karp")


dm = graphGenerator(22);
console.time("Size 22 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 22 Matrix TSP Local Search")
console.time("Size 22 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 22 Matrix TSP Held-Karp")


dm = graphGenerator(23);
console.time("Size 23 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 23 Matrix TSP Local Search")
console.time("Size 23 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 23 Matrix TSP Held-Karp")



dm = graphGenerator(24);
console.time("Size 24 Matrix TSP Local Search")
console.log("Local Search Return Value: " + tsp_ls(dm))
console.timeEnd("Size 24 Matrix TSP Local Search")
console.time("Size 24 Matrix TSP Held-Karp")
console.log("Held-Karp Return Value: " + tsp_hk(dm))
console.timeEnd("Size 24 Matrix TSP Held-Karp")



function graphGenerator(graphSize)
{
    graph = connectedGraph(graphSize)
    for(let i = 0; i < graph.length; i++)
    {
      for(let j = 0; j < graph.length; j++)
      {
        if(graph[i][j] == 0)
        {
                graph[i][j] = 1
        }
        if(graph[i][j] == 1)
        {
                let weight = Math.max(Math.floor(Math.random()*9),2)
                graph[i][j] = weight
                graph[j][i] = weight
        }
        if(i == j)
        {
            graph[i][j] = 0
        }
      }
    }
    return graph
}


function connectedGraph(v)
{
    graph = []
    for(i=0; i < v; i++)
    {
        graph.push([])
        for(j=0; j < v; j++)
        {
            graph[i].push(0)
        }
    }
    edges = Math.max(Math.floor(v*(Math.random()*(v))),v-1)
    return connectedGraph2(v, edges, graph)
}

function connectedGraph2(v, e, graph, connectedNodes = [0])
{
    while(e > v-connectedNodes.length)
    {
        n1 = randomElementRange(connectedNodes.length)
        n1 = connectedNodes[n1]
        n2 = randomElementRange(v)
        unplaced = true
        while(unplaced)
        {
            if(graph[n1][n2] == 0)
            {
                graph[n1][n2] = 1
                e -=1    
                if(!connectedNodes.includes(n2))
                {
                    connectedNodes.push(n2)
                }
                unplaced = false
            } else if(n2 < graph[n1].length)
            {
                n2 += 1
            } else if(n2 >= graph[n1].length-1)
            {
                if(n1 == graph.length - 1)
                {
                    n1 = 0
                    n2 = 0
                } else
                {
                    n2 = 0
                    n1 += 1
                }
            }
        }
    }
    if(e > 0)
    {
        for(i = 0; i < v; i++)
        {
            if(!connectedNodes.includes(i))
            {
                n1 = Math.max(Math.floor(Math.random()*(connectedNodes.length))-1,0)
                n1 = connectedNodes[n1]
                graph[n1][i] = 1
                e -= 1
                connectedNodes.push(i)
            }   
        }
    }
    return graph
}

function randomElementRange(n) 
{
    return Math.floor(Math.random()*n)
}
