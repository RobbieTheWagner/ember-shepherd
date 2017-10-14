import config from '../config/environment';
import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import { settings } from 'ember-native-dom-helpers';
import { start } from 'ember-cli-qunit';

const { APP: { rootElement } } = config;

settings.rootElement = rootElement || settings.rootElement;

setResolver(resolver);
start();
