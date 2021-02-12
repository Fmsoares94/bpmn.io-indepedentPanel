
export interface EventPropertiesPanel {
    id: string
    businessObject: BusinessObject
    type: string
}

export interface CreateElement {
    businessObject: BusinessObject
    inputType: InputType
}

export interface BusinessObject {
    $type: string
    id: string
    isExecutable: boolean
    name: string
    documentation: Array<Document>
    $attrs: Attributs
}

interface Document {
    $type: string
    text: string
}

export interface Attributs {
    name?: string
    dropdown?: Array<string>
    nom_tipo_atii_rotr_jorn_clie?: String
    outputdatalock: string
    methodDEV: string
    addressDEV: string
    contentTypeDEV: string
    bodyDEV: string
    methodHML: string
    addressHML: string
    contentTypeHML: string
    bodyHML: string
    methodPRD: string
    addressPRD: string
    contentTypePRD: string
    bodyPRD: string
    devListHeaders: string
    hmlListHeaders: string
    prdListHeaders: string
    devListQueryString: Array<{key: '', value: ''}>
    hmlListQueryString: Array<{key: '', value: ''}>
    prdListQueryString: Array<{key: '', value: ''}>
    devListPathString: Array<{key: '', value: ''}>
    hmlListPathString: Array<{key: '', value: ''}>
    prdListPathString: Array<{key: '', value: ''}>
    devListAuthentication: Array<{key: '', value: ''}>
    hmlListAuthentication: Array<{key: '', value: ''}>
    prdListAuthentication: Array<{key: '', value: ''}>

}


interface InputType {
    select?: Array<Select>
    textArea?: Array<TextArea>
    text?: Array<Text>;

}

interface Select {
    formControlName: string,
    required: boolean
    id?: string
    text: string
    options: Array<string>
}

interface TextArea {
    formControlName: string,
    required: boolean
    id?: string
    text: string
    rows: string
    cols: string
}

interface Text {
    formControlName: string,
    required: boolean
    id?: string
    text: string
}