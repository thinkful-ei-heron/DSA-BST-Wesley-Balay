const Tree = require('./Tree');

function main() {
  let BST = new Tree();

  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(9, 9);
  BST.insert(7, 7);

  //   BST.insert('E', null);
  //   BST.insert('A', null);
  //   BST.insert('S', null);
  //   BST.insert('Y', null);
  //   BST.insert('Q', null);
  //   BST.insert('U', null);
  //   BST.insert('E', null);
  //   BST.insert('S', null);
  //   BST.insert('T', null);
  //   BST.insert('I', null);
  //   BST.insert('O', null);
  //   BST.insert('N', null);

  // let testTree = new Tree(4, null, null);
  // testTree.left = 6;
  // testTree.right = 3;
  // return isBinary(testTree);
  //return treeHeight(BST);

  return balancedBST(BST);
}

function tree(t) {
  /**
   * This function returns the sum of all the values in our tree! AKA 37.
   * We think that this function's runtime is linear O(n). This is because
   * the bigger the tree, the longer it will take since the recursive function call
   * is being executed on both sides of the tree no matter what.
   */
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}



function treeHeight(tree) {
  //this function's runtime is linear O(n) because we go through both sides of the tree
  //no matter what.
  if (tree === null) {
    return 0;
  }
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

function isBinary(tree) {
  if (tree.left > tree.right) {
    return false;
  }
  if (tree.left && !isBinary(tree.left)) {
    return false;
  }
  if (tree.right && !isBinary(tree.right)) {
    return false;
  }
  return true;
}



// Time complexity O(n*2)
function thirdLargest(tree, maxValues) {
  // Find the max and go 2 back.
  if(tree && tree.left){
    thirdLargest(tree.left, maxValues);
  }
  maxValues.push(tree.key);
  if(tree && tree.right){
    thirdLargest(tree.right, maxValues);
  }
  return maxValues[maxValues.length - 3];


  // if(!tree.right && !tree.left){
  //   if(!maxValues.length){
  //     return;
  //   }
  //   if(maxValues.length < 2){
  //     return maxValues[0];
  //   }
  //   maxValues.sort();
  //   return maxValues[maxValues.length - 3];
  // }
  // if (tree.right && !tree.left){
  //   return thirdLargest(tree.right, [...maxValues, tree.right.key]);
  // }
  // if (tree.left && !tree.right){
  //   return thirdLargest(tree.left, [...maxValues, tree.left.key]);
  // }

}

//O(n) - linear
function balancedBST(tree) {
  let left = treeHeight(tree.left);
  let right = treeHeight(tree.right);

  if (left - right > 1 || right - left > 1) {
    return false;
  }
  return true;
}

function sameBST(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   if (arr1[0] !== arr2[0]) {
//     return false;
//   }
//   if (!arr1 || !arr2) {
//     return;
//   }

  if (arr1[0] !== arr2[0] || arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.length === 0) {
    return true;
  }

  let leftArr = [[],[]];
  let rightArr = [[],[]];

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[0] > arr1[i]) {
      leftArr[0].push(arr1[i]);
    } else {
      rightArr[0].push(arr1[i]);
    }
    if (arr2[0] > arr2[i]) {
      leftArr[1].push(arr2[i]);
    }else {
      rightArr[1].push(arr2[i]);
    }
  }
  return (sameBST(leftArr[0], leftArr[1]) && sameBST(rightArr[0], rightArr[1]));
  //   let arr1Left = [];
  //   let arr1Right = [];
  //   let arr2Left = [];
  //   let arr2Right = [];

  //   for (let i = 0; i < arr1.length; i++) {
  //     let root = arr1[0];
  //     if (arr1[i] > root) {
  //       arr1Right.push(arr1[i]);
  //     }
  //     if (arr1[i] < root) {
  //       arr1Left.push(arr1[i]);
  //     }
  //   }

  //   for (let i = 0; i < arr2.length; i++) {
  //     let root = arr2[0];
  //     if (arr2[i] > root) {
  //       arr2Right.push(arr2[i]);
  //     }
  //     if (arr1[i] < root) {
  //       arr2Left.push(arr2[i]);
  //     }
  //   }

  

  

  //[1, 2, 0]
  //[1, 0, 2]

  //   let arr1Moves = [];
  //   let arr2Moves = [];

  //   for (let i = 1; i < arr1.length; i++) {
  //     const root = arr1[0];
  //     if (arr1[i] > root) {
  //       if (arr1Moves[0]) {
  //         arr1Moves.push([arr1[i], 'right/right']);
  //       } else if (arr1Moves[0][0] > arr1[i]){
  //         arr1Moves.push([arr1[i], 'right/left']);
  //       }
  //     }
  //     if (arr1[i] < root) {
  //       arr1Moves.push(arr1[i], 'left');
  //     }
  //   }

}

console.log(sameBST([3, 6, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));

//right - 5, right/left - 4, right/right - 6, left - 1, left/left - 0, left/right - 2
//left - 1, right - 5, left/right - 2, right/left - 4, right/right - 6, left/left - 0

//arr1 - right [5, 4, 6] left [1, 0, 2]
//arr2 - right [5, 4, 6] left [1, 2, 0]




//console.log(main());