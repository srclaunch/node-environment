import { Environment, EnvironmentType } from '@srclaunch/types';

const devEnvironment: Environment = {
  id: 'dev',
  type: EnvironmentType.Development,
  public: false,
  name: 'Development',
  description: 'Development environment',
};

const testEnvironment: Environment = {
  id: 'test',
  type: EnvironmentType.NonProduction,
  public: false,
  name: 'Test',
  description: 'Test environment',
};

const prodEnvironment: Environment = {
  id: 'prod',
  type: EnvironmentType.Production,
  public: true,
  name: 'Production',
  description: 'Production environment',
};


export function getEnvironment(): Environment {
  const environment = process.env.NODE_ENV;

  if (environment === 'dev' || environment === 'development') {
    return devEnvironment;
  }
  if (environment === 'prod' || environment === 'production') {
    return prodEnvironment;
  }

  return testEnvironment;
}
