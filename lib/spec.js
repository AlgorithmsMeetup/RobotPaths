var expect = chai.expect;

describe('the countPaths method', function(){
  it('should work for small square grids', function(){
    var grids = [createGrid(2,2), createGrid(3,3), createGrid(4,4)];
    var solutions = [2, 6, 20];

    for(var i = 0; i < grids.length; i++){
      expect(countPaths(grids[i])).to.equal(solutions[i]);
    }
  });

  it('should work for small rectangular grids', function(){
    var grids = [createGrid(2,3), createGrid(3,4), createGrid(4,2)];
    var solutions = [3, 10, 4];

    for(var i = 0; i < grids.length; i++){
      expect(countPaths(grids[i])).to.equal(solutions[i]);
    }
  });

  it('should work for medium sized grids (both square and rectangular)', function(){
    var grids = [createGrid(7, 8), createGrid(10, 6), createGrid(6, 6), createGrid(8,8)];
    var solutions = [1716, 2002, 252, 3432];

    for(var i = 0; i < grids.length; i++){
      expect(countPaths(grids[i])).to.equal(solutions[i]);
    }
  });

  xit('should work when there are obstacles in the given grid', function(){
    var grid = createGrid(7,7);
    var obstacleCoordinates = [[0, 3], [1, 1], [2, 1], [2, 3], [4, 1], [4, 4], [5, 0], [5, 6], [6, 2]];
    for(var i = 0; i < obstacleCoordinates.length; i++){
      var x = obstacleCoordinates[i][0];
      var y = obstacleCoordinates[i][1];
      grid[x][y] = 0
    }
    var solution = 23;
    expect(countPaths(grid)).to.equal(solution);
  });

  xit('should not error or time out on very large grids', function(){
    var grid = createGrid(100, 100);
    var solution = 2.2750883079422938e+58
    expect(countPaths(grid)).to.equal(solution);
  });
});


function createGrid(rows, columns){
  var grid = [];
  for(var i = 0; i < rows; i++){
    grid[i] = new Array(columns);
  }
  return grid;
}
