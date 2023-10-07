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
      key: 'stock_management',
      label: 'Select Your Preferred Stock Management Feature for the Web App:',
      dependsOn: 'platform',
      condition: ['web'],
      featureMain: false,
      alternative: false,
      featureValue: ['web'],
      options: [
        { 
          value: 'inventory_tracking',
          display: 'Inventory Tracking: Real-time tracking of stock levels and movement.'
        },
        { 
          value: 'restocking_alerts',
          display: 'Restocking Alerts: Receive alerts when stock levels fall below a defined threshold.'
        },
        { 
          value: 'stock_analysis',
          display: 'Stock Analysis: Analyze stock data for inventory optimization and reduced holding costs.'
        },
        { 
          value: 'order_management',
          display: 'Order Management: Manage purchase orders, suppliers, and incoming stock effectively.'
        }
      ]
    },
    
    {
      key: 'tipoPlatforma',
      label: 'Select the type of Mobile Platform: Android or iOS?',
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
      key: 'eslOperations',
      label: 'Does your app require to perform ESL operations like commissioning and decommissioning?',
      dependsOn: 'platform',
      condition: ['mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'commissioning', display: 'ESL Commissioning' },
        { value: 'decommissioning', display: 'ESL Decommissioning' }
      ]
    },
    {
      key: 'eslPermissions',
      label: 'Does the app need to manage different user permissions for ESL operations?',
      dependsOn: 'platform',
      condition: ['mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'manageEslPermissions', display: 'Manage ESL Permissions' }
      ]
    },
    {
      key: 'sessionManagement',
      label: 'Is user session management required for operations and data security?',
      dependsOn: 'platform',
      condition: ['web', 'mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['web', 'mobile'],
      options: [
        { value: 'userSessionManagement', display: 'User Session Management' }
      ]
    },
    {
      key: 'eslStatusCheck',
      label: 'Do users need to check the status of ESL devices remotely?',
      dependsOn: 'platform',
      condition: ['web', 'mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['web', 'mobile'],
      options: [
        { value: 'eslStatusView', display: 'ESL Status View' }
      ]
    },
    {
      key: 'infrastructure',
      label: 'Choose the type of infrastructure for your application: Local, Cloud, or Hybrid?',
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
      key: 'typeCloud',
      label: 'Select the type of Cloud environment: Public or Private?',
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
      label: 'Select the type of Web Application functionalities you require: Inventory, Installation Check, or Pricing and Promotions?',
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
      label: 'Choose the installation type: Commissioning Check or Installation Check?',
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
      label: 'Choose the display type for the ESL: LCD, E-paper, LED, OLED, or TFT?',
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
      label: 'How Would You Like to Manage the Web Installation Process?',
      dependsOn: 'platform',
      condition: ['web'],
      featureValue: ['web'],
      alternative: false,
      featureMain: false,
      options: [
        {
          value: 'professional_installation',
          display: 'Expert-Led Installation: Allow our technical team to handle the complete setup, ensuring a smooth and hassle-free deployment of the web platform.'
        },
        {
          value: 'self_commissioning',
          display: 'Self-Commissioning: Undertake the setup process internally, using our guided workflows and support documentation to navigate the installation procedures.'
        }
      ]
    },

    {
      key: 'esl_management_features',
      label: 'Choose Your Essential ESL Management Feature:',
      dependsOn: 'platform',
      condition: ['web'],
      featureMain: false,
      alternative: false,
      featureValue: ['web'],
      options: [
        {
          value: 'health_monitoring',
          display: 'Health Monitoring: Ensure continuous observation of ESL statuses and receive alerts for anomalies.'
        },
        {
          value: 'user_roles',
          display: 'User Roles: Define and manage distinct access levels and capabilities for different user types.'
        },
        {
          value: 'data_recovery',
          display: 'Data Recovery: Safeguard data with automated backups and establish a recovery plan.'
        },
        {
          value: 'remote_esl_management',
          display: 'Remote ESL Management: Configure and troubleshoot ESLs remotely for optimized operations.'
        }
      ]
    },

    {
      key: 'mobile_user_authentication',
      label: 'Choose your preferred method of user authentication on mobile:',
      dependsOn: 'platform',
      condition: ['mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'biometric', display: 'Biometric: Use fingerprint or facial recognition' },
        { value: 'two_factor', display: '2FA: Utilize two-factor authentication' },
        { value: 'single_sign_on', display: 'SSO: Implement single sign-on' }
      ]
    },
    {
      key: 'type_installation_mobile',
      label: 'Select your desired mobile installation type:',
      dependsOn: 'platform',
      condition: ['mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'specific_device', display: 'Specific Device Installation' }
      ]
    },
    {
      key: 'notification_settings',
      label: 'Define your preferred notification settings on mobile:',
      dependsOn: 'platform',
      condition: ['mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'push_notifications', display: 'Push: Receive push notifications' },
        { value: 'email_notifications', display: 'Email: Opt for email alerts' },
        { value: 'sms_notifications', display: 'SMS: Get updates via SMS' }
      ]
    },
    {
      key: 'inventory_search',
      label: 'How would you prefer to conduct inventory searches?',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'barcode', display: 'Barcode Scanning: Use the scanner for quick search' },
        { value: 'keyword', display: 'Keyword: Type to find specific items' }
      ]
    },
    {
      key: 'decommissioning_log',
      label: 'Select your preferred method of ESL decommissioning logging:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'manual_entry', display: 'Manual: Input data manually' },
        { value: 'automatic_log', display: 'Automatic: Use automatic logging' }
      ]
    },
    {
      key: 'commissioning_log',
      label: 'Choose the preferred method for logging ESL commissioning:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'manual_entry', display: 'Manual Entry: Add items manually' },
        { value: 'scan_to_add', display: 'Scan to Add: Use scanning for item addition' }
      ]
    },
    {
      key: 'qr_code_reader',
      label: 'How should the app interact with QR Codes in ESL management?',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'quick_scan', display: 'Quick Scan: Scan and view ESL information' },
        { value: 'scan_and_manage', display: 'Scan and Manage: Scan and perform operations like commissioning or decommissioning' }
      ]
    },
    {
      key: 'commissioning_process',
      label: 'Choose the ESL Commissioning Process Style:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'interactive_mode', display: 'Interactive Mode' },
        { value: 'batch_mode', display: 'Batch Mode' }
      ]
    },
    {
      key: 'price_update',
      label: 'Select the Desired ESL Price Update Mechanism:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'manual_update', display: 'Manual: Update prices as needed' },
        { value: 'scheduled_update', display: 'Scheduled: Set times for automatic price updates' },
        { value: 'dynamic_pricing', display: 'Dynamic: Employ algorithms for price adjustments' }
      ]
    },
    {
      key: 'shelf_management',
      label: 'Opt for Preferred Shelf Management Capabilities:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'shelf_empty_alerts', display: 'Empty Alerts: Notify when shelves are empty' },
        { value: 'restocking_alerts', display: 'Restocking Alerts: Send alerts to restock' },
        { value: 'shelf_analytics', display: 'Analytics: Gain insights into shelf space usage' }
      ]
    },
    {
      key: 'inventory_management',
      label: 'Pick Your Inventory Management Solutions:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'inventory_tracking', display: 'Tracking: Monitor inventory in real-time' },
        { value: 'low_stock_alerts', display: 'Low Stock Alerts: Notify when stock is low' },
        { value: 'automated_reordering', display: 'Automated Reordering: Restock inventory automatically' }
      ]
    },
    {
      key: 'customer_engagement_esl',
      label: 'Define Your ESL Customer Engagement Tactics:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'qr_code_promotions', display: 'QR Promotions: Engage customers with QR code deals' },
        { value: 'nfc_product_info', display: 'NFC Info: Provide product details via NFC' },
        { value: 'led_blinking_offers', display: 'LED Offers: Attract attention with blinking LED offers' }
      ]
    },
    {
      key: 'instore_navigation',
      label: 'Specify In-Store Navigation Preferences:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      featureValue: ['mobile'],
      alternative: false,
      options: [
        { value: 'ar_navigation', display: 'AR Navigation: Direct customers using augmented reality' },
        { value: 'map_based_navigation', display: 'Map Navigation: Utilize store map for guidance' }
      ]
    },
    {
      key: 'employee_tools',
      label: 'Choose Employee Tools for Effective ESL Management:',
      dependsOn: 'platform',
      condition: ['mobile', 'web'],
      featureMain: false,
      alternative: false,
      featureValue: ['mobile', 'web'],
      options: [
        { value: 'task_management', display: 'Task Management: Assign and monitor staff tasks efficiently.' },
        { value: 'communication_tool', display: 'Communication: Ensure smooth and rapid employee interactions and communication.' },
        { value: 'sales_analytics', display: 'Sales Analytics: Derive insights from sales data and optimize performance.' },
        { value: 'esl_management', display: 'ESL Management: Monitor and manage ESLs in real-time to ensure accurate and consistent pricing information across the store.' }
      ]
    },
    {
      key: 'product_info_display',
      label: 'Which Method Would You Like to Utilize for Displaying Product Information?',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      alternative: false,
      featureValue: ['mobile'],
      options: [
        {
          value: 'dynamic_info_display',
          display: 'Dynamic Display: Rotate through different pieces of product information dynamically, ensuring diverse and timely information is presented to customers.'
        },
        {
          value: 'multimedia_display',
          display: 'Multimedia Display: Engage customers by showcasing product details through rich multimedia content like images, and interactive interfaces.'
        }
      ]
    },
    {
      key: 'discount_feature',
      label: 'Choose the type of discount feature you need: Bulk Discounts, Seasonal Promotions, or Loyalty Discounts?',
      dependsOn: 'platform',
      condition: ['web', 'mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['web', 'mobile'],
      options: [
        { value: 'bulk_discounts', display: 'Bulk Discounts' },
        { value: 'seasonal_promotions', display: 'Seasonal Promotions' },
        { value: 'loyalty_discounts', display: 'Loyalty Discounts' }
      ]
    },

    {
      key: 'currency_options',
      label: 'Select your preferred currency option for pricing: USD, BRL, EUR, or GBP?',
      dependsOn: 'platform',
      condition: ['web'],
      alternative: false,
      featureMain: false,
      featureValue: ['web'],
      options: [
        { value: 'USD', display: 'USD' },
        { value: 'EUR', display: 'EUR' },
        { value: 'GBP', display: 'GBP' },
        { value: 'BRL', display: 'BRL' }
      ]
    },

    {
      key: 'pricing_strategy',
      label: 'Select a pricing strategy: Cost-Plus Pricing, Value-Based Pricing, or Competitive Pricing?',
      dependsOn: 'platform',
      condition: ['web', 'mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['web', 'mobile'],
      options: [
        { value: 'cost_plus_pricing', display: 'Cost-Plus Pricing' },
        { value: 'value_based_pricing', display: 'Value-Based Pricing' },
        { value: 'competitive_pricing', display: 'Competitive Pricing' }
      ]
    },
    {
      key: 'esl_reporting',
      label: 'Select the Types of ESL Reports You’d Like to Generate:',
      dependsOn: 'platform',
      condition: ['web', 'mobile'],
      featureMain: false,
      alternative: false,
      featureValue: ['web', 'mobile'],
      options: [
        { value: 'price_accuracy_report', display: 'Price Accuracy Report: Verify that ESL prices match the central pricing system.' },
        { value: 'battery_status_report', display: 'Battery Status Report: Monitor the battery levels of each ESL to plan replacements.' },
        { value: 'communication_status_report', display: 'Communication Status Report: Check the communication health between ESLs and the central server.' },
        { value: 'update_history_report', display: 'Update History Report: Review the history of content updates on each ESL.' },
        { value: 'inventory_status_report', display: 'Inventory Status Report: Align ESL information with inventory levels.' },
        { value: 'price_change_audit', display: 'Price Change Audit: Audit reports for all the price changes made over a specified period.' },
        { value: 'error_report', display: 'Error Report: Identify and resolve issues related to pricing errors or miscommunications.' }
      ]
    }





  ];

  getFeatures() {
    return this.features;
  }
}
