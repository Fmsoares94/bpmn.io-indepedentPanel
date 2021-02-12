import { DropdownProperties } from "../elements/properties-dropdown";
import { List } from "../elements/properties-List";
import { SliderProperties } from "../elements/properties-slider";
import { TextboxProperties } from "../elements/properties-textbox";

export class TransactionResponse {

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
                    required: true,
                    value: propertiesPanel.businessObject.$attrs.inputDataLoc
                },
            ),
            new TextboxProperties({
                id: propertiesPanel.id,
                key: 'datalocResponse',
                label: 'datalocResponse',
                value: propertiesPanel.businessObject.$attrs.datalocResponse,
                required: true,
                order: 1,
                tab: 'TransactionResponse',
            }),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'schemaValidacao',
                    label: 'schema Validação',
                    required: true,
                    value: propertiesPanel.businessObject.$attrs.schemaValidacao,
                    order: 2,
                    tab: 'TransactionResponse'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'listaCondicaoTentativa',
                    label: 'lista Condição Tentativa',
                    type: 'FormArray',
                    order: 3,
                    tab: 'TransactionResponse',
                    required: true,
                    value: propertiesPanel.businessObject.$attrs.conditionsList
                },
            ),
        ];
    }
}
