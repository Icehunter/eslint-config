import { type Linter } from 'eslint';
import config from 'eslint-config-standard/.eslintrc.json';

const casted = config as unknown as Linter.Config;

export default casted;
