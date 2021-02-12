
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
    inputDataLoc: string
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
    devListQueryString: string
    hmlListQueryString: string
    prdListQueryString: string
    devListPathString: string
    hmlListPathString: string
    prdListPathString: string
    devListAuthentication: string
    hmlListAuthentication: string
    prdListAuthentication: string

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