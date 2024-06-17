//Definición del enum
export enum ROLES {
  ADMIN = 'admin', //Puedo agregar tambien numeros EJ. ADMIN= 1
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

//Uso o llamado del Enum
const lauUser: User = {
  username: 'username',
  role: ROLES.ADMIN,
};