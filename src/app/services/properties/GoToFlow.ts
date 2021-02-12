import { DropdownProperties } from "../elements/properties-dropdown";
import { List } from "../elements/properties-List";
import { SliderProperties } from "../elements/properties-slider";
import { TextboxProperties } from "../elements/properties-textbox";

export class GoToFlow {

    get(propertiesPanel) {
        return [
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'activityName',
                    label: 'activityName',
                    order: 1,
                    tab: 'general',
                    value: propertiesPanel.businessObject.name
                },
            ),
            new TextboxProperties({
                id: propertiesPanel.id,
                key: 'activityId',
                label: 'activityId',
                value: propertiesPanel.businessObject.id,
                required: true,
                order: 2,
                tab: 'general',
                disabled: true
            }),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'outputDataLock',
                    label: 'outputDataLock',
                    value: propertiesPanel.businessObject.$attrs.outputdatalock,
                    order: 3,
                    tab: 'general'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'inputDataLoc',
                    label: 'InputDataLoc',
                    type: 'FormArray',
                    order: 4,
                    tab: 'general',
                    value: propertiesPanel.businessObject.$attrs.inputDataLoc
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'subFlowID',
                    label: 'sub Flow ID',
                    value: propertiesPanel.businessObject.$attrs.subFlowID,
                    order: 1,
                    tab: 'Go To Flow'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'initialActivity',
                    label: 'Initial Activity',
                    value: propertiesPanel.businessObject.$attrs.initialActivity,
                    order: 2,
                    tab: 'Go To Flow'
                },
            ),
        ];
    }
}
