export enum ResponseMessages {
  SUCCESS_CREATED = "was created successfully",
  SUCCESS_UPDATED = "was updated successfully",
  SUCCESS_DELETED = "was deleted successfully",
}

export const notNullMessage = (objectName: string) => {
  return `Field ${objectName} can not be null`;
};

export const isEmailMessage = (objectName: string) => {
  return `Field ${objectName} must be an email`;
};

export const isNumberMessage = (objectName: string) => {
  return `Field ${objectName} must be a number`;
};

export const isStringMessage = (objectName: string) => {
  return `Field ${objectName} must be a string`;
};

export const isBooleanMessage = (objectName: string) => {
  return `Field ${objectName} must be a boolean`;
};
