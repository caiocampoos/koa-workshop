/**
 * @generated SignedSource<<7b133ccfa50760807c39f4a873e7348b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "updateEvent",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateEventMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "updateEventMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a10436305d5bfafe75ae52995a3c2efe",
    "id": null,
    "metadata": {},
    "name": "updateEventMutation",
    "operationKind": "mutation",
    "text": "mutation updateEventMutation(\n  $content: String\n  $_id: ID\n) {\n  updateEvent(_id: $_id, content: $content) {\n    _id\n    content\n  }\n}\n"
  }
};
})();

node.hash = "4c221f3482ae991d7ade8d61699d6ee6";

module.exports = node;
