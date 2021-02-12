import { EventPropertiesPanel } from "../../../../models/startEvent.model";
import { DropdownProperties } from "../elements/properties-dropdown";
import { List } from "../elements/properties-List";
import { TextboxProperties } from "../elements/properties-textbox";

export class CallApi {

    get(propertiesPanel: EventPropertiesPanel) {
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
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'method-DEV',
                    label: 'method-DEV',
                    options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
                    order: 1,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.methodDEV
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'address-DEV',
                    label: 'address-DEV',
                    order: 2,
                    tab: 'content',
                    valeu: propertiesPanel.businessObject.$attrs.addressDEV
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'contentType-DEV',
                    label: 'contentType-DEV',
                    order: 3,
                    tab: 'content',
                    valeu: propertiesPanel.businessObject.$attrs.contentTypeDEV
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'body-DEV',
                    label: 'body-DEV',
                    order: 4,
                    tab: 'content',
                    valeu: propertiesPanel.businessObject.$attrs.bodyDEV
                },
            ),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'method-HML',
                    label: 'method-HML',
                    options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
                    order: 5,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.methodHML
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'address-HML',
                    label: 'address-HML',
                    order: 6,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.addressHML
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'contentType-HML',
                    label: 'contentType-HML',
                    order: 7,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.contentTypeHML
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'body-HML',
                    label: 'body-HML',
                    order: 8,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.bodyHML
                },
            ),
            new DropdownProperties(
                {
                    id: propertiesPanel.id,
                    key: 'method-PRD',
                    label: 'method-PRD',
                    options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
                    order: 9,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.methodPRD
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'address-PRD',
                    label: 'address-PRD',
                    order: 10,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.addressPRD
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'contentType-PRD',
                    label: 'contentType-PRD',
                    order: 11,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.contentTypePRD
                },
            ),
            new TextboxProperties(
                {
                    id: propertiesPanel.id,
                    key: 'body-PRD',
                    label: 'body-PRD',
                    order: 12,
                    tab: 'content',
                    value: propertiesPanel.businessObject.$attrs.bodyPRD
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'devListHeaders',
                    label: 'DEV',
                    type: 'FormArray',
                    order: 1,
                    tab: 'headers',
                    value: propertiesPanel.businessObject.$attrs.devListHeaders
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'hmlListHeaders',
                    label: 'HML',
                    type: 'FormArray',
                    order: 2,
                    tab: 'headers',
                    value: propertiesPanel.businessObject.$attrs.hmlListHeaders
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'prdListHeaders',
                    label: 'PRD',
                    type: 'FormArray',
                    order: 3,
                    tab: 'headers',
                    value: propertiesPanel.businessObject.$attrs.prdListHeaders
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'devListQueryString',
                    label: 'DEV',
                    type: 'FormArray',
                    order: 1,
                    tab: 'queryString',
                    value: propertiesPanel.businessObject.$attrs.devListQueryString
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'hmlListQueryString',
                    label: 'HML',
                    type: 'FormArray',
                    order: 2,
                    tab: 'queryString',
                    value: propertiesPanel.businessObject.$attrs.hmlListQueryString
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'prdListQueryString',
                    label: 'PRD',
                    type: 'FormArray',
                    order: 3,
                    tab: 'queryString',
                    value: propertiesPanel.businessObject.$attrs.prdListQueryString
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'devListPathString',
                    label: 'DEV',
                    type: 'FormArray',
                    order: 1,
                    tab: 'pathString',
                    value: propertiesPanel.businessObject.$attrs.devListPathString
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'hmlListPathString',
                    label: 'HML',
                    type: 'FormArray',
                    order: 2,
                    tab: 'pathString',
                    value: propertiesPanel.businessObject.$attrs.hmlListPathString
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'prdListPathString',
                    label: 'PRD',
                    type: 'FormArray',
                    order: 3,
                    tab: 'pathString',
                    value: propertiesPanel.businessObject.$attrs.prdListPathString
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'devListAuthentication',
                    label: 'DEV',
                    type: 'FormArray',
                    order: 1,
                    tab: 'authentication',
                    value: propertiesPanel.businessObject.$attrs.devListAuthentication
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'hmlListAuthentication',
                    label: 'HML',
                    type: 'FormArray',
                    order: 2,
                    tab: 'authentication',
                    value: propertiesPanel.businessObject.$attrs.hmlListAuthentication
                },
            ),
            new List(
                {
                    id: propertiesPanel.id,
                    key: 'prdListAuthentication',
                    label: 'PRD',
                    type: 'FormArray',
                    order: 3,
                    tab: 'authentication',
                    value: propertiesPanel.businessObject.$attrs.prdListAuthentication
                },
            ),
        ];
    }

    update(value: EventPropertiesPanel, res) {
        value.businessObject.name = res.value.activityName
        value.businessObject.$attrs.outputdatalock = res.value.outputDataLock
        value.businessObject.$attrs.methodDEV = res.value["method-DEV"]
        value.businessObject.$attrs.methodHML = res.value["method-HML"]
        value.businessObject.$attrs.methodPRD = res.value["method-PRD"]
        value.businessObject.$attrs.bodyDEV = res.value["body-DEV"]
        value.businessObject.$attrs.bodyHML = res.value["body-HML"]
        value.businessObject.$attrs.bodyPRD = res.value["body-PRD"]
        value.businessObject.$attrs.addressDEV = res.value["address-DEV"]
        value.businessObject.$attrs.addressHML = res.value["address-HML"]
        value.businessObject.$attrs.addressPRD = res.value["address-PRD"]
        value.businessObject.$attrs.contentTypeDEV = res.value["contentType-DEV"]
        value.businessObject.$attrs.contentTypeHML = res.value["contentType-HML"]
        value.businessObject.$attrs.contentTypePRD = res.value["contentType-PRD"]
        value.businessObject.$attrs.devListAuthentication = res.value.devListAuthentication
        value.businessObject.$attrs.devListHeaders = res.value.devListHeaders
        value.businessObject.$attrs.devListPathString = res.value.devListPathString
        value.businessObject.$attrs.devListQueryString = res.value.devListQueryString
        value.businessObject.$attrs.hmlListAuthentication = res.value.hmlListAuthentication
        value.businessObject.$attrs.hmlListHeaders = res.value.hmlListHeaders
        value.businessObject.$attrs.hmlListPathString = res.value.hmlListPathString
        value.businessObject.$attrs.hmlListQueryString = res.value.hmlListQueryString
        value.businessObject.$attrs.prdListAuthentication = res.value.prdListAuthentication
        value.businessObject.$attrs.prdListHeaders = res.value.prdListHeaders
        value.businessObject.$attrs.prdListPathString = res.value.prdListPathString
        value.businessObject.$attrs.prdListQueryString = res.value.prdListQueryString
    }
}
