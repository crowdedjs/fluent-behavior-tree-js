import BehaviorTreeStatus from "../BehaviorTreeStatus.js";
import BehaviorTreeError from "../Error/BehaviorTreeError.js";
import Errors from "../Error/Errors.js";
import StateData from "../StateData.js";
import BehaviorTreeNodeInterface from "./BehaviorTreeNodeInterface.js";

/**
 * A behavior tree leaf node for running an action
 *
 * @property {string}                                   name - The name of the node
 * @property {(state: StateData) => BehaviorTreeStatus} fn   - Function to invoke for the action.
 */
class ActionNode extends BehaviorTreeNodeInterface {
    name;
    fn;

    constructor(name, fn) {
        this.name = name;
        this.fn = fn;
    }

    async tick(state) {
        const result = await this.fn(state);
        if (!result) {
            throw new BehaviorTreeError(Errors.NO_RETURN_VALUE);
        }

        return result;
    }
}

export default ActionNode;