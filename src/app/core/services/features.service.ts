import { Injectable } from '@angular/core';
import { Feature } from '../modules/models/features.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  private features: Feature[] = [
    {
      key: 'platform',
      label: 'Select the ESL solution component to configure:',
      alternative: false,
      featureMain: true,
      options: [
        { value: 'mobile', display: 'ESL Installation Device' },
        { value: 'web', display: 'Web Application' },
        { value: 'esl', display: 'ESL' },
      ]
    },
    {
      key: 'mobileAppFunctionalities',
      label: 'Select functionalities for the mobile ESL application:',
      dependsOn: 'platform',
      condition: ['mobile'],
      featureMain: false,
      alternative: false,
      featureValue: ['mobile'],
      options: [
        { value: 'commission_decommission', display: 'Commission/Decommission' },
        { value: 'view_product_info', display: 'Viewing Product Information' },
        { 
          value: 'search_product',
          display: 'Search Product.'
        },
        { 
          value: 'display_esl_information',
          display: 'Display ESL Information.'
        },

      ]
    },
    {
      key: 'deviceType',
      label: 'Select the device type for ESL Installation Device:',
      dependsOn: 'platform',
      condition: ['mobile'],
      alternative: true,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'mobile_phone', display: 'Mobile Phone' },
        { value: 'dedicated_device', display: 'Dedicated Device' }
      ]
    },
    {
      key: 'authenticatingMobileUser',
      label: 'Choose your preferred method of mobile user authentication:',
      dependsOn: 'deviceType',
      condition: ['mobile_phone', 'mobile'],
      alternative: true,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'two_factors', display: 'Two-Factor Authentication' },
        { value: 'biometric', display: 'Biometric Authentication' }
      ]
    },
    {
      key: 'platformType',
      label: 'Which platform will the ESL Installation Device use, iOS or Android?',
      dependsOn: 'deviceType',
      condition: ['mobile_phone', 'mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'android', display: 'Android' },
        { value: 'ios', display: 'iOS' }
      ]
    },
    {
      key: 'eslFeatures',
      label: 'Does the app need to manage different user permissions for ESL operations?',
      dependsOn: 'platform',
      condition: ['mobile'],
      alternative: false,
      featureMain: false,
      featureValue: ['mobile'],
      options: [
        { value: 'manageEslPermissions', display: 'Authenticating mobile User' }
      ]
    },
    {
      key: 'typeAuth',
      label: 'Select the type of authentication: Two-Factor or Biometric?',
      dependsOn: 'sessionManagement',
      condition: ['userSessionManagement'],
      alternative: true,
      featureMain: false,
      featureValue: ['web', 'mobile'],
      options: [
        { value: 'two_factors', display: 'Two Factors' },
        { value: 'biometric', display: 'Biometric' },
      ]
    },
    {
      key: 'infrastructure',
      label: 'Choose the type of infrastructure for your application: Local, Cloud, or Hybrid?',
      dependsOn: 'platform',
      condition: ['web'],
      alternative: false,
      featureMain: false,
      featureValue: ['web'],
      options: [
        { value: 'local', display: 'Local' },
        { value: 'cloud', display: 'Cloud' },
        { value: 'hybrid', display: 'Hybrid' },
        { value: 'managing-store-layout', display: 'Managing Store Layout' },
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
      key: 'webAppFunctionalities',
      label: 'Select the functionalities for the Web Application:',
      dependsOn: 'platform',
      condition: ['web'],
      alternative: false,
      featureMain: false,
      featureValue: ['web'],
      options: [
        { value: 'view_price_updates', display: 'View Price Updates' },
        { value: 'view_commission_decommission', display: 'Viewing Commission/Decommission' },
        { value: 'view_installation_uninstallation', display: 'Viewing Installation/Uninstallation' },
        { value: 'esl_reports', display: 'ESL Reports' },
        { value: 'esl_logs', display: 'ESL Logs' }
      ]
    },
    {
      key: 'webAppSecurity',
      label: 'Select the security features for the Web Application:',
      dependsOn: 'platform',
      condition: ['web'],
      alternative: false,
      featureMain: false,
      featureValue: ['web'],
      options: [
        { value: 'managing_sessions', display: 'Managing Sessions' },
        { value: 'access_management', display: 'Access Management' },
        { value: 'manage_esl_permissions', display: 'Manage ESL Permissions' }
      ]
    },

    {
      key: 'esl_features',
      label: 'Select the primary features for the Electronic Shelf Label (ESL):',
      dependsOn: 'platform',
      condition: ['esl'],
      alternative: false,
      featureMain: true,
      featureValue: ['esl'],
      options: [
        { value: 'connective', display: 'Connectivity Features' },
        { value: 'power_source', display: 'Power Source Options' },
        { value: 'screen_type', display: 'Screen Type Options' }
      ]
    },
    {
      key: 'screen_type',
      label: 'Select the screen type for ESL:',
      dependsOn: 'esl_features',
      condition: ['screen_type'],
      alternative: true,
      featureMain: false,
      featureValue: ['esl'],
      options: [
        { value: 'lcd', display: 'LCD' },
        { value: 'e_paper', display: 'E-Paper' },
        { value: 'led', display: 'LED' },
        { value: 'oled', display: 'OLED' },
        { value: 'tft', display: 'TFT' }
      ]
    }
    

  ];

  getFeatures() {
    return this.features;
  }
}
