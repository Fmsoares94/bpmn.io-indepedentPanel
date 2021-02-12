export class PropertiesBase<T> {
  id: string
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  tab:string
  disabled: boolean
  options: { key: string, value: string }[];

  constructor(options: {
    value?: T,
    id?: string,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    tab?:string,
    controlType?: string,
    type?: string
    disabled?: boolean
  } = {}) {

      this.id = options.id
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.tab = options.tab || null;;
      this.disabled = options.disabled || false

  }
}