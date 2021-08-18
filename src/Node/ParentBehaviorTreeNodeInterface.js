import BehaviorTreeNodeInterface from "./BehaviorTreeNodeInterface.js";

class ParentBehaviorTreeNodeInterface extends BehaviorTreeNodeInterface {
    /**
     * Add a child node to the selector.
     *
     * @param {BehaviorTreeNodeInterface} child
     */
    addChild(child) { }
}

export default ParentBehaviorTreeNodeInterface;