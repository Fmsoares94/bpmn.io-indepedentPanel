import { PropertiesBase } from '../propertiesBase';

export class List extends PropertiesBase<string> {
    controlType = 'list';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}