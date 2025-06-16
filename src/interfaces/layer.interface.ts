import BaseLayer from "ol/layer/Base";
import {LAYER_TYPES} from "../constants/layers.constant";
import {USER_ROLES} from "../constants/user-roles.constant";

export interface Layer {
    baseLayer: BaseLayer,
    name: string,
    type: (typeof LAYER_TYPES)[keyof typeof LAYER_TYPES],
    roles: (typeof USER_ROLES)[keyof typeof USER_ROLES][],
    base: boolean,
    visible: boolean,
}