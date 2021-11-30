"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_TYPES = exports.USER_GROUP = exports.MENU_ICON_SIZE = exports.MENU_ICON_COLOR = exports.MENU_ICON_ACTIVE_COLOR = exports.LISTING_LIMIT = exports.DEFAULT_TIMEOUT = exports.CRUD_ACTION_LIST = exports.CHALLENGE_NAME = void 0;
const MENU_ICON_SIZE = 32;
exports.MENU_ICON_SIZE = MENU_ICON_SIZE;
const MENU_ICON_COLOR = '#333333';
exports.MENU_ICON_COLOR = MENU_ICON_COLOR;
const MENU_ICON_ACTIVE_COLOR = '#006E96';
exports.MENU_ICON_ACTIVE_COLOR = MENU_ICON_ACTIVE_COLOR;
const DEFAULT_TIMEOUT = 100;
exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
const CHALLENGE_NAME = {
  SOFTWARE_TOKEN_MFA: 'SOFTWARE_TOKEN_MFA',
  NEW_PASSWORD_REQUIRED: 'NEW_PASSWORD_REQUIRED',
  TOTP_SETUP: 'TOTP_SETUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD'
};
exports.CHALLENGE_NAME = CHALLENGE_NAME;
const USER_GROUP = {
  SUPER_ADMIN: 'pentair_super_admin_group'
}; // used in routePath & validating action on component

exports.USER_GROUP = USER_GROUP;
const CRUD_ACTION_LIST = ['create', 'edit', 'view'];
exports.CRUD_ACTION_LIST = CRUD_ACTION_LIST;
const LISTING_LIMIT = 20; // This is fixed from platform side

exports.LISTING_LIMIT = LISTING_LIMIT;
const USER_TYPES = Object.freeze({
  1: 'superAdmin',
  2: 'admin',
  3: 'twm',
  4: 'owner',
  5: 'dispatcher',
  6: 'manager',
  7: 'technician'
});
exports.USER_TYPES = USER_TYPES;