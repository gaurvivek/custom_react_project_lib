
export const MENU_ICON_SIZE = 32;
export const MENU_ICON_COLOR = '#333333';
export const MENU_ICON_ACTIVE_COLOR = '#006E96';


export const DEFAULT_TIMEOUT = 100;

export const CHALLENGE_NAME = {
  SOFTWARE_TOKEN_MFA: 'SOFTWARE_TOKEN_MFA',
  NEW_PASSWORD_REQUIRED: 'NEW_PASSWORD_REQUIRED',
  TOTP_SETUP: 'TOTP_SETUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
};

export const USER_GROUP = {
  SUPER_ADMIN: 'pentair_super_admin_group',
};

// used in routePath & validating action on component
export const CRUD_ACTION_LIST = ['create', 'edit', 'view'];
export const LISTING_LIMIT = 20;

// This is fixed from platform side
export const USER_TYPES = Object.freeze({
  1: 'superAdmin',
  2: 'admin',
  3: 'twm',
  4: 'owner',
  5: 'dispatcher',
  6: 'manager',
  7: 'technician',
});
