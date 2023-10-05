  import { Injectable } from '@angular/core';
  import { Feature } from '../modules/models/features.model';

    @Injectable({
      providedIn: 'root'
    })
    export class FeaturesService {

      private features: Feature[] = [
        {
          key: 'platform',
          label: 'Which application you want starting choosing the features ? For the mobile app or web app ?',
          alternative: false,
          featureMain: true,
          options: [
            { value: 'mobile', display: 'Mobile' },
            { value: 'web', display: 'Web' }
          ]
        },
        {
          key: 'gestaoEstoque',
          label: 'Stock Management?',
          dependsOn: 'platform',
          condition: ['web'],
          alternative: false,
          featureMain: false,
          featureValue: ['web'],
          options: [
            { value: 'ESL_function', display: 'ESL_function' },
            { value: 'ESL_ESTOQUE', display: 'ESL_ESTOQUE' }
          ]
        },
        {
          key: 'tipoPlatforma',
          label: 'Which platform type?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'android', display: 'Android' },
            { value: 'ios', display: 'IOS' },
          ]
        },
        {
          key: 'infrastructure',
          label: 'What is your infrastructure type?',
          dependsOn: 'platform',
          condition: ['web', 'mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['web', 'mobile'],
          options: [
            { value: 'local', display: 'Local' },
            { value: 'cloud', display: 'Cloud' },
            { value: 'hybrid', display: 'Hybrid' },
          ]
        },
        {
          key: 'tipoCloud',
          label: 'What type of Cloud environment?',
          dependsOn: 'infrastructure',
          condition: ['cloud'],
          alternative: true,
          featureMain: false,
          featureValue: ['web', 'mobile'],
          options: [
            { value: 'public', display: 'Public' },
            { value: 'private', display: 'Private' },
          ]
        },
        {
          key: 'type_application',
          label: 'What type of application?',
          dependsOn: 'platform',
          condition: ['web'],
          alternative: false,
          featureMain: false,
          featureValue: ['web'],
          options: [
            { value: 'inventory_functions', display: 'Inventory Functions' },
            { value: 'installation_check_funcions', display: 'Installation Check Functions' },
            { value: 'price_and_promotion_functions', display: 'Price and Promotion Functions' },
          ]
        },
        {
          key: 'type_instalation',
          label: 'What type of installation?',
          dependsOn: 'type_application',
          condition: ['installation_check_funcions'],
          featureMain: false,
          alternative: false,
          featureValue: ['web'],
          options: [
            { value: 'comissioning_check', display: 'Commissioning Check' },
            { value: 'installation_check', display: 'Installation Check' },
          ]
        },
        {
          key: 'physical_installation_type',
          label: 'What type of physical installation?',
          dependsOn: 'type_application',
          condition: ['installation_check_funcions'],
          alternative: false,
          featureMain: false,
          featureValue: ['web'],
          options: [
            { value: 'shelf_mount', display: 'Shelf Mount' }, //Esta é a instalação padrão onde as etiquetas são montadas diretamente nas prateleiras.
            { value: 'pegboard_hook', display: 'Pegboard Hook' }, // painéis perfurados para pendurar produtos.
            { value: 'magnetic_mount', display: 'Magnetic Mount' }, // prateleiras metálicas
          ]
        },
        {
          key: 'type_display',
          label: 'What type of ESL display?',
          dependsOn: 'platform',
          condition: ['web', 'mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['web', 'mobile'],
          options: [
            { value: 'LCD', display: 'LCD' },
            { value: 'E_paper', display: 'E-paper' },
            { value: 'LED', display: 'LED' },
            { value: 'OLED', display: 'OLED' },
            { value: 'TFT', display: 'TFT' },
          ]
        },
        {
          key: 'type_installation_web',
          label: 'What type of Web installation?',
          dependsOn: 'platform',
          condition: ['web'],
          featureValue: ['web'],
          alternative: false,
          featureMain: false,
          options: [
            { value: 'profissional_installation', display: 'Professional Installation' },
            { value: 'commisioning', display: 'Commissioning' },
          ]
        },
        {
          key: 'mobile_user_authentication',
          label: 'User Authentication?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'biometric', display: 'Biometric Authentication' },
            { value: 'two_factor', display: 'Two-Factor Authentication' },
            { value: 'single_sign_on', display: 'Single Sign-On' },
          ]
        },
        {
          key: 'type_installation_mobile',
          label: 'What type of Mobile installation?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'specific_device', display: 'Specific Device' },
          ]
        },
        {
          key: 'notification_settings',
          label: 'Settings for Notifications?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'push_notifications', display: 'Push Notifications' },
            { value: 'email_notifications', display: 'Email Notifications' },
            { value: 'sms_notifications', display: 'SMS Notifications' },
          ]
        },
        {
          key: 'inventory_search',
          label: 'Inventory Search?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'barcode_search', display: 'Barcode Search' },
            { value: 'keyword_search', display: 'Keyword Search' },
            { value: 'camera_view', display: 'Camera View' },
            { value: 'coordinates_translator', display: 'Coordinates Translator' },
            { value: 'gallery_view', display: 'Gallery View' },
            { value: 'scanner', display: 'Scanner' },
            
          ],
          
        },
        {
          key: 'lm_decommissioning_log_item',
          label: 'Log Item for Decommissioning?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'timestamp', display: 'Timestamp' },
            { value: 'mac_address', display: 'MAC Address' },
            { value: 'operation_status', display: 'Operation Status' },
            { value: 'success_indicator', display: 'Success Indicator' },
          ]
        },
        {
          key: 'lm_commissioning_log_item',
          label: 'Log Item for Commissioning?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'timestamp', display: 'Timestamp' },
            { value: 'mac_address', display: 'MAC Address' },
            { value: 'product_ean', display: 'Product EAN' },
            { value: 'operation_status', display: 'Operation Status' },
            { value: 'operation_status_description', display: 'Operation Status Description' },
            { value: 'employee_code', display: 'Employee Code' },
            { value: 'success_indicator', display: 'Success Indicator' }
          ]
        },
        {
          key: 'qr_code_reader',
          label: 'QR Code Reader?',
          dependsOn: 'platform',
          condition: ['mobile'],
          alternative: false,
          featureMain: false,
          featureValue: ['mobile'],
          options: [
            { value: 'overlay_color', display: 'Overlay Color' },
            { value: 'scan_area', display: 'Scan Area' },
            { value: 'border_color', display: 'Border Color' },
            { value: 'border_width', display: 'Border Width' },
            { value: 'border_radius', display: 'Border Radius' },
            { value: 'border_painter', display: 'Border Painter' },
            { value: 'overlay_with_hole_painter', display: 'Overlay With Hole Painter' }
          ]
        },
        {
          "key": "commissioning_process_manager",
          "label": "Commissioning Process Manager?",
          "dependsOn": "platform",
          "condition": ["mobile"],
          "alternative": false,
          "featureMain": false,
          "featureValue": ["mobile"],
          "options": [
            {
              "value": "sgtin_parameter",
              "display": "SGTIN Parameter"
            },
            {
              "value": "mac_parameter",
              "display": "MAC Parameter"
            },
            {
              "value": "auth_token",
              "display": "Authentication Token"
            },
            {
              "value": "employee_code",
              "display": "Employee Code"
            },
            {
              "value": "store_business_unit_code",
              "display": "Store Business Unit Code"
            },
            {
              "value": "timestamp",
              "display": "Timestamp"
            },
            {
              "value": "mongo_usr_actions_object_id",
              "display": "Mongo User Actions Object ID"
            },
            {
              "value": "send_to_mongo",
              "display": "Send to Mongo"
            },
            {
              "value": "send_to_connector",
              "display": "Send to Connector"
            },
            {
              "value": "commission_method",
              "display": "Commission Method"
            },
            {
              "value": "decommission_method",
              "display": "Decommission Method"
            }
          ]
        }
        
        
        
        
      ];

      getFeatures() {
        return this.features;
      }
    }
