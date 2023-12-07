import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldsIncrement extends Schema.Component {
  collectionName: 'components_fields_increments';
  info: {
    displayName: 'increment';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    amount: Attribute.Integer;
  };
}

export interface FieldsInputWithIncrements extends Schema.Component {
  collectionName: 'components_fields_input_with_increments';
  info: {
    displayName: 'Input With Increments';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    name: Attribute.String;
    componentRender: Attribute.String &
      Attribute.Private &
      Attribute.DefaultTo<'inputWithIncrements'>;
    placeholder: Attribute.String;
    max: Attribute.Integer;
    min: Attribute.Integer;
    step: Attribute.Integer;
    required: Attribute.Boolean;
    disabled: Attribute.Boolean;
    suggestion: Attribute.Text;
    instructions: Attribute.Text;
    pattern: Attribute.Text;
    increments: Attribute.Component<'fields.increment', true>;
    validationRules: Attribute.Component<'fields.validation', true>;
    type: Attribute.String & Attribute.Private & Attribute.DefaultTo<'number'>;
  };
}

export interface FieldsInput extends Schema.Component {
  collectionName: 'components_fields_inputs';
  info: {
    displayName: 'input';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['tel', 'password', 'checkbox', 'text']>;
    label: Attribute.String;
    name: Attribute.String;
    required: Attribute.Boolean;
    disabled: Attribute.Boolean;
    placeholder: Attribute.Text;
    defaultValue: Attribute.Enumeration<['mobile']>;
    validationRules: Attribute.Component<'fields.validation', true>;
    componentRender: Attribute.Enumeration<['button', 'checkbox', 'input']> &
      Attribute.Required;
  };
}

export interface FieldsValidation extends Schema.Component {
  collectionName: 'components_fields_validations';
  info: {
    displayName: 'validation';
  };
  attributes: {
    message: Attribute.Text;
    pattern: Attribute.Text;
  };
}

export interface LayoutProviderList extends Schema.Component {
  collectionName: 'components_layout_provider_lists';
  info: {
    displayName: 'Provider List';
    description: '';
  };
  attributes: {
    providers: Attribute.Relation<
      'layout.provider-list',
      'oneToMany',
      'api::provider.provider'
    >;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'meta';
    icon: 'layout';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fields.increment': FieldsIncrement;
      'fields.input-with-increments': FieldsInputWithIncrements;
      'fields.input': FieldsInput;
      'fields.validation': FieldsValidation;
      'layout.provider-list': LayoutProviderList;
      'seo.meta': SeoMeta;
    }
  }
}
