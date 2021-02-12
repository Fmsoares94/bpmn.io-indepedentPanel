import { PropertiesBase } from '../propertiesBase';

export class TextboxProperties extends PropertiesBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}