const Tree = require('./Tree');

function main() {
  let BST = new Tree();

    BST.insert(3, 3);
    BST.insert(1, 1);
    BST.insert(4, 4);
    BST.insert(6, 6);
    BST.insert(9, 9);
    BST.insert(2, 2);
    BST.insert(5, 5);
    BST.insert(7, 7);

  // BST.insert('E', null);
  // BST.insert('A', null);
  // BST.insert('S', null);
  // BST.insert('Y', null);
  // BST.insert('Q', null);
  // BST.insert('U', null);
  // BST.insert('E', null);
  // BST.insert('S', null);
  // BST.insert('T', null);
  // BST.insert('I', null);
  // BST.insert('O', null);
  // BST.insert('N', null);

  // let testTree = new Tree(4, null, null);
  // testTree.left = 6;
  // testTree.right = 3;
  // return isBinary(testTree);
  //return treeHeight(BST);

  return thirdLargest(BST);
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
function thirdLargest(tree, maxValues = []){
  // Find the max and go 2 back.
  if(!tree.right && !tree.left){
    if(!maxValues.length){
      return ;
    }
    maxValues.sort();
    return maxValues[maxValues.length - 3];
  }
  if (tree.right){
    return thirdLargest(tree.right, [...maxValues, tree.right.key]);
  }
  if (tree.left){
    return thirdLargest(tree.left, [...maxValues, tree.left.key]);
  }
}






console.log(main());