import { DropdownProperties } from "../elements/properties-dropdown";
import { List } from "../elements/properties-List";
import { TextboxProperties } from "../elements/properties-textbox";

export class CallApi {

    get(propertiesPanel) {
        return [
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'activityName',
                    label: 'activityName',
                    order: 1,
                    tab: 'general'
                },
            ),
            new TextboxProperties({
                id: propertiesPanel.id,
                key: 'activityId',
                label: 'activityId',
                value: propertiesPanel.businessObject.name,
                required: true,
                order: 2,
                tab: 'general'
            }),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'outputDataLock',
                    label: 'outputDataLock',
                    order: 3,
                    tab: 'general'
                },
            ),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'method-DEV',
                    label: 'method-DEV',
                    options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
                    order: 1,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'address-DEV',
                    label: 'address-DEV',
                    order: 2,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'contentType-DEV',
                    label: 'contentType-DEV',
                    order: 3,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'body-DEV',
                    label: 'body-DEV',
                    order: 4,
                    tab: 'content'
                },
            ),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'method-HML',
                    label: 'method-HML',
                    options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
                    order: 5,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'address-HML',
                    label: 'address-HML',
                    order: 6,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'contentType-HML',
                    label: 'contentType-HML',
                    order: 7,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'body-HML',
                    label: 'body-HML',
                    order: 8,
                    tab: 'content'
                },
            ),  
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'method-PRD',
                    label: 'method-PRD',
                    options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
                    order: 9,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'address-PRD',
                    label: 'address-PRD',
                    order: 10,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'contentType-PRD',
                    label: 'contentType-PRD',
                    order: 11,
                    tab: 'content'
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'body-PRD',
                    label: 'body-PRD',
                    order: 12,
                    tab: 'content'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'DEV_LIST_HEADERS',
                    label: 'DEV',
                    type:'FormArray',
                    order: 1,
                    tab: 'headers'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'HML_LIST_HEADERS',
                    label: 'HML',
                    type:'FormArray',
                    order: 2,
                    tab: 'headers'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'PRD_LIST_HEADERS',
                    label: 'PRD',
                    type:'FormArray',
                    order: 3,
                    tab: 'headers'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'DEV_LIST_QUERYSTRING',
                    label: 'DEV',
                    type:'FormArray',
                    order: 1,
                    tab: 'queryString'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'HML_LIST_QUERYSTRING',
                    label: 'HML',
                    type:'FormArray',
                    order: 2,
                    tab: 'queryString'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'PRD_LIST_QUERYSTRING',
                    label: 'PRD',
                    type:'FormArray',
                    order: 3,
                    tab: 'queryString'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'DEV_LIST_PATHSTRING',
                    label: 'DEV',
                    type:'FormArray',
                    order: 1,
                    tab: 'pathString'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'HML_LIST_PATHSTRING',
                    label: 'HML',
                    type:'FormArray',
                    order: 2,
                    tab: 'pathString'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'PRD_LIST_PATHSTRING',
                    label: 'PRD',
                    type:'FormArray',
                    order: 3,
                    tab: 'pathString'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'DEV_LIST_AUTHENTICATION',
                    label: 'DEV',
                    type:'FormArray',
                    order: 1,
                    tab: 'authentication'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'HML_LIST_LIST_AUTHENTICATION',
                    label: 'HML',
                    type:'FormArray',
                    order: 2,
                    tab: 'authentication'
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'PRD_LIST_LIST_AUTHENTICATION',
                    label: 'PRD',
                    type:'FormArray',
                    order: 3,
                    tab: 'authentication'
                },
            ),
        ];
    }
}
