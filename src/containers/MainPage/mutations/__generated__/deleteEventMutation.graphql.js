/**
 * @generated SignedSource<<c8178a549abce4ac0ef7a0aeee609db6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteEvent",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteEventMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteEventMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a5aa5ce6cf90ef1257e14aed73b5f423",
    "id": null,
    "metadata": {},
    "name": "deleteEventMutation",
    "operationKind": "mutation",
    "text": "mutation deleteEventMutation(\n  $_id: ID\n) {\n  deleteEvent(_id: $_id)\n}\n"
  }
};
})();

node.hash = "f64c2cfed21a0be30c45d9a95e07f3b7";

module.exports = node;
