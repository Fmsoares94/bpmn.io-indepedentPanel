import { DropdownProperties } from "../elements/properties-dropdown";
import { List } from "../elements/properties-List";
import { SliderProperties } from "../elements/properties-slider";
import { TextboxProperties } from "../elements/properties-textbox";

export class UserRequest {

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
            new TextboxProperties({
                id: propertiesPanel.id,
                key: 'RequestTemplate',
                label: 'RequestTemplate',
                value: propertiesPanel.businessObject.$attrs.RequestTemplate,
                required: true,
                order: 1,
                tab: 'UserRequest',
            }),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'inputEnabled',
                    label: 'inputEnabled',
                    options: [null,'Desabilitado', 'Habilitado', 'Habilitado até o envio da próxima mensagem e desabilitada após o envio'],
                    order: 1,
                    tab: 'InputState',
                    value: propertiesPanel.businessObject.$attrs.inputEnabled
                },
            ),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'inputType',
                    label: 'inputType',
                    options: [null,'Teclado padrão', 'teclado numérico', 'Teclado de datas (calendário) do sistema operacional'],
                    order: 2,
                    tab: 'InputState',
                    value: propertiesPanel.businessObject.$attrs.inputType
                },
            ),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'inputMask',
                    label: 'inputMask',
                    options: [null,'Sem máscara', 'Máscara dinâmica via inputMaskData'],
                    order: 3,
                    tab: 'InputState',
                    value: propertiesPanel.businessObject.$attrs.inputMask
                },
            ),
            new TextboxProperties({
                id: propertiesPanel.id,
                key: 'inputMaskData',
                label: 'inputMaskData',
                value: propertiesPanel.businessObject.$attrs.inputMaskData,
                required: true,
                order: 4,
                tab: 'InputState',
            }),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'inputValidationType',
                    label: 'inputValidationType',
                    options: [null, 'Sem validação', 'Regex com pattern do inputValidationDate', 'Data no formato: dd/mm/aaaa', 'Data no formato: mm/aaaa', 'Data no formato: dd/mm', 'Data/Ano: aaaa', 'Formato númerico com 2 casas decimais: #.###,##','Número inteiro: #.###.###', 'CPF', 'CNPJ', 'E-mail', 'Telefone Celular', 'Telefone Fixo' ],
                    order: 5,
                    tab: 'InputState',
                    value: propertiesPanel.businessObject.$attrs.inputMask
                },
            ),
        ];
    }
}
