/**
 * @generated SignedSource<<d466ed04c088977189c97bee2a0868cf>>
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
    "name": "content"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "createEvent",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createEventMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createEventMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "35d064ea1e2b00cf6e34f19c577e4163",
    "id": null,
    "metadata": {},
    "name": "createEventMutation",
    "operationKind": "mutation",
    "text": "mutation createEventMutation(\n  $content: String\n) {\n  createEvent(content: $content) {\n    _id\n    content\n  }\n}\n"
  }
};
})();

node.hash = "99ce893ee2ab4f1194db9647cb6460e4";

module.exports = node;
