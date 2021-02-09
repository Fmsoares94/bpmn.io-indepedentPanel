import { DropdownProperties } from "../elements/properties-dropdown";
import { SliderProperties } from "../elements/properties-slider";
import { TextboxProperties } from "../elements/properties-textbox";

export class StartFlow {

    get(propertiesPanel) {
        return [
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'inputDataLock',
                    label: 'Input Data Lock',
                    options: [],
                    order: 3
                },
            ),
            new TextboxProperties({
                id: propertiesPanel.id,
                key: 'name',
                label: 'Name',
                value: propertiesPanel.businessObject.name,
                required: true,
                order: 2
            }),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'outputDataLock',
                    label: 'Output Data Lock',
                    options: [],
                    order: 1
                },
            ),
            new SliderProperties({

            })
        ];
    }
}
