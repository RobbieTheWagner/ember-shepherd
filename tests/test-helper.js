import resolver from './helpers/resolver';
import { module } from 'qunit';
import {
  setResolver
} from 'ember-qunit';
import { start } from 'ember-cli-qunit';

setResolver(resolver);
start();
